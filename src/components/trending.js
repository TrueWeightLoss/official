import Cards from "./cards";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import Empty from "./empty";
const Trending = () => {
  let [loading, setLoading] = useState(false);
  const [res, setResult] = useState([]);
  const locationfetch = location.pathname;

  useEffect(() => {
    setLoading(true);

    const url = location.pathname.slice(1);
    console.log(url);
    if (url) {
      axios
        .get("https://anonpe.com/api/sampleapi.php?param=" + url)
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          setResult(response.data);
          // axios returns API response body in .data
        });
    } else {
      axios.get("https://323pnbyhfb.execute-api.us-east-2.amazonaws.com/default/posts/").then((response) => {
        console.log(response.data);
        setLoading(false);
        setResult(response.data);
        // axios returns API response body in .data
      });
    }
  }, [locationfetch]);

  return (
    <>
      {loading ? (
        <div className="linear-background"></div>
      ) : res.length ? (
        res.map((item, itemIndex) => {
          return (
            <Cards
              title={item.type}
              description={item.desc}
              url={item.link}
              time={item.modified}
            />
          );
        })
      ) : (
        <Empty />
      )}
    </>
  );
};
export default Trending;
