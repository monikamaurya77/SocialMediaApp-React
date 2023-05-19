import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import Footer from "./Footer";

const Comment = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = (page) => {
    fetch(`https://dummyapi.io/data/v1/post/${id}`, {
      method: "GET",
      headers: {
        "app-id": "63c8d645ab5b7b2d98a1c29e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      });
  };
  const getCommentData = () => {
    fetch(`https://dummyapi.io/data/v1/post/${id}/comment`, {
      method: "GET",
      headers: {
        "app-id": "63c8d645ab5b7b2d98a1c29e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComment(data.data);
      });
  };

  useEffect(() => {
    getData();
    getCommentData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {isLoading && <h2 className="loading mt-4">Loading...</h2>}
      {!isLoading && (
        <>
          {" "}
          <div className="col-5 mt-3 mx-auto intro">
            <img src={post?.image} alt="dog" width={"100%"} />
          </div>
          <div className="col-5 mt-4 mx-auto">
            <p className="desc">
              {post.text} -{" "}
              <span className="author">
                {post?.owner?.firstName + " " + post?.owner?.lastName}
              </span>
            </p>
          </div>
        </>
      )}

      {comment.length > 0 &&
        comment.map((elem) => {
          return <CommentCard data={elem} />;
        })}

      <Footer />
    </>
  );
};

export default Comment;
