import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import PostCard from "./PostCard";

const Home = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const getData = (page) => {
    fetch(`https://dummyapi.io/data/v1/post?page=${page}&limit=20`, {
      method: "GET",
      headers: {
        "app-id": "63c8d645ab5b7b2d98a1c29e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost([...post, ...data.data]);
      });
  };

  useEffect(() => {
    getData(page);
    // eslint-disable-next-line
  }, []);
  const handleClick = (page) => {
    setPage(page + 1);
    fetch(`https://dummyapi.io/data/v1/post?page=${page + 1}&limit=20`, {
      method: "GET",
      headers: {
        "app-id": "63c8d645ab5b7b2d98a1c29e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost([...post, ...data.data]);
      });
  };
  return (
    <div>
      <div className="col-5 mt-3 p-3 mx-auto intro">
        <h1 className="hi">Hi 🖐️</h1>
        <p className="welcome">Welcome to MonikaConnect</p>
        <p>Love Animals 💜</p>
      </div>
      {post.length >= 0 &&
        post.map((elem) => {
          return <PostCard key={elem.id} data={elem} />;
        })}
      <div className="next-div">
        <button className="next" onClick={() => handleClick(page)}>
          LOADING...
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
