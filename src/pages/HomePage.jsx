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
          <div className="card" key={val.publishedAt}>
            <img src={val.urlToImage} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4>
                <b>{val.title}</b>
              </h4>
              <p>{val.description}</p>
            </div>
            <button>
              <a href={val.url} target="_blank">
                Read more
              </a>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
