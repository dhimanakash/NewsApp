import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homepage.css";

const HomePage = () => {
  const [apiData, setApiData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9ab2ae99801f4590842cbdd9c6b508c2"
    );
    setApiData(response.data.articles);
    console.log(response.data.articles, "data");
    return response.data.articles;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 style={{ margin: "10px 0px" }}>Top Headlines 💯</h1>
      {apiData.map((val) => {
        return (
          <li key={val.publishedAt} className="headlines-list">
            {val.title}
          </li>
        );
      })}
    </>
  );
};

export default HomePage;
