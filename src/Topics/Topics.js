import React from "react";
import { useState, useEffect } from "react";
import "./Topic.css";
import { useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

function Topics(props) {
  var { name } = useParams();
  const [Newsdata, setNewsdata] = useState([]);
  const [Newstypes, setNewstypes] = useState("");
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(() => {
    setNewstypes(name);

    const abortCont = new AbortController();

    fetch(
      "https://api.nytimes.com/svc/topstories/v2/" +
        Newstypes +
        ".json?api-key=XIVnWlOJN3MbihJ6u5Zb7vxf6EjIi8ib",
      { signal: abortCont.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsdata(data["results"]);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });

    return () => abortCont.abort();
  }, [Newstypes, name]);

  return (
    <div className="Topics-Cotainer">
      <div className="Feed-heading">
        <h2 style={{ paddingLeft: "14px", color: "rgb(68, 84, 110)" }}>
          {Capitalize(name)} News
        </h2>
      </div>

      {Error && (
        <div className="Error-Block">
          <h2>Loading Data...</h2>
          <img
            style={{ width: "130px", height: "auto" }}
            src={require("../NotExistMsg/pngwing.com.png").default}
          />
        </div>
      )}

      {Newsdata &&
        Newsdata.map((item) => {
          return <NewsCard key={item["url"]} data={item} />;
        })}
    </div>
  );
}

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default Topics;
