import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import HeaderTool from '@editorjs/header';
import ImageTool from '@editorjs/image';
import ListTool from '@editorjs/list';
import ChecklistTool from '@editorjs/checklist';
import QuoteTool from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import EmbedTool from '@editorjs/embed';
import LinkTool from '@editorjs/link';
import WarningTool from '@editorjs/warning';
import DelimiterTool from '@editorjs/delimiter';
import { v4 as uuidv4 } from 'uuid';

function Edit() {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [editorData, setEditorData] = useState(null);
  const [randomUUID, setRandomUUID] = useState('');
  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = new EditorJS({
        holder: editorRef.current,
        tools: {
          header: HeaderTool,
          image: ImageTool,
          list: ListTool,
          checklist: ChecklistTool,
          quote: QuoteTool,
          code: CodeTool,
          embed: EmbedTool,
          link: LinkTool,
          warning: WarningTool,
          delimiter: DelimiterTool,
        },
        // Add your other configuration options here
        onChange: (api, newData) => {
          // Update the state with the new data whenever the editor content changes
          setEditorData(newData);
        },
      });
      
      const newUUID = uuidv4();
      setRandomUUID(newUUID);
      setEditor(editorInstance);
    }

    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, []);

  // Function to handle the submission
  const handleSubmit = async () => {
    if (editor) {
      try {
        const savedData = await editor.save();

        // Convert the saved data to JSON
        const jsonData = JSON.stringify(savedData);

        // Send the JSON data to a server using the fetch function
        fetch('https://wleqauwfyf.execute-api.us-east-2.amazonaws.com/default/addPostForTrueWeightLossJourney', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          id: randomUUID,
          body: jsonData,
          
        })
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the server response here
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } catch (error) {
        console.error('Error while saving Editor.js data:', error);
      }
    }
  };

  return (
    <div>
      <div className="editor" ref={editorRef}></div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Edit;
