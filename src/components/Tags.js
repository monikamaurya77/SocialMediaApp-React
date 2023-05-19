import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import PostCard from "./PostCard";

const Tags = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("q");
  const [tagData, setTagData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getTagData = () => {
    fetch(`https://dummyapi.io/data/v1/tag/${name}/post`, {
      method: "GET",
      headers: {
        "app-id": "63c8d645ab5b7b2d98a1c29e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTagData(data.data);
        setIsLoading(true);
      });
  };
  useEffect(() => {
    getTagData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="col-5 mt-3 p-3 mx-auto intro">
        <h1 className="welcome mb-3">Search Results for - {name}</h1>
        <p>Love Animals ❣</p>
      </div>
      {!isLoading && <h2 className="loading mt-4">Loading...</h2>}
      {tagData.length >= 0 &&
        tagData.map((elem) => {
          return <PostCard key={elem.id} data={elem} />;
        })}
      <Footer />
    </>
  );
};

export default Tags;
