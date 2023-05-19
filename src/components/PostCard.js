import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostCard = ({ data }) => {
  const [isLike, setIsLike] = useState(false);
  const handleLikes = () => {
    if (!isLike) {
      data.likes += 1;
      setIsLike(true);
    } else {
      data.likes -= 1;
      setIsLike(false);
    }
  };
  return (
    <div className="col-5 mt-3  mx-auto intro">
      <div className="profile m-2">
        <Link to={`/profile/${data.owner.id}`}>
          <div className="p_img">
            <img
              src={data?.owner?.picture}
              alt="ssaea"
              width="35px"
              height="35px"
            />
          </div>
        </Link>
        <div className="p_name">
          <Link to={`/profile/${data.owner.id}`} className="p_names">
            <p>{data?.owner?.firstName + " " + data?.owner?.lastName}</p>
          </Link>
          <p className="p_time">{data?.publishDate}</p>
        </div>
      </div>
      <img src={data?.image} alt="dog" width={"100%"} />
      <div className="content p-3">
        <p className="p_time">{data?.text}</p>

        <div className="tags mt-2">
          <div className="tag">
            <Link to={`/search?q=${data.tags[0]}`}>#{data?.tags[0]}</Link>
          </div>

          <div className="tag">
            <Link to={`/search?q=${data.tags[1]}`}>#{data?.tags[1]}</Link>
          </div>
          <div className="tag">
            <Link to={`/search?q=${data.tags[2]}`}>#{data?.tags[2]}</Link>
          </div>
        </div>
        <div className="like mt-3">
          <div className="likes">
            <i
              className={`fa-solid fa-heart ${isLike ? "likink" : ""}`}
              onClick={() => handleLikes()}
            ></i>{" "}
            {data?.likes} Likes
          </div>
          <div className="comment">
            <Link to={`/post/${data.id}`}>
              <i className="fa-solid fa-comment"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
