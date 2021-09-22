import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <div>This is a HomePage 🏠</div>
      {apiData.map((val) => {
        return <li key={val.publishedAt}>{val.title}</li>;
      })}
    </>
  );
};

export default HomePage;
