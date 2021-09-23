import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homepage.css";

const HomePage = () => {
  const [apiData, setApiData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=9ab2ae99801f4590842cbdd9c6b508c2&pageSize=10&page=${pageNo}`
    );
    setApiData(response.data.articles);
    console.log(response.data.articles, "data");
    return response.data.articles;
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePrevClick = async () => {
    console.log("prevClick");
    setPageNo(pageNo - 1);
  };
  const handleNextClick = async () => {
    console.log("nextClick");
    setPageNo(pageNo + 1);
  };

  return (
    <>
      <h1 style={{ margin: "10px 0px", textAlign: "center" }}>
        Top Headlines 💯
      </h1>
      <div className="outer-container">
        {apiData.map((val) => {
          const { publishedAt, urlToImage, title, description, url } = val;
          return (
            <div className="card" key={publishedAt}>
              <img
                src={
                  urlToImage
                    ? urlToImage
                    : "https://static.toiimg.com/thumb/msid-86453061,width-1070,height-580,imgsize-86304,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                }
                alt="Avatar"
                style={{ width: "100%" }}
              />

              <div className="container">
                <h4 style={{ margin: "10px 0px" }}>
                  <b>{title}</b>
                </h4>
                <p>{description}</p>
              </div>
              <button>
                <a href={url} target="_blank" rel="noreferrer">
                  Read more
                </a>
              </button>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button className="button button5" onClick={handlePrevClick}>
          &larr; Prev
        </button>
        <button className="button button5" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </>
  );
};

export default HomePage;
