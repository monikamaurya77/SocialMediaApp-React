import React from "react";

const CommentCard = ({ data }) => {
  return (
    <div className="col-5 mt-3 mx-auto intro">
      <div className="profile m-2">
        <div className="p_img">
          <img
            src={data?.owner?.picture}
            alt="ssaea"
            width="35px"
            height="35px"
          />
        </div>

        <div className="p_name">
          <p>{data?.owner?.firstName + " " + data?.owner?.lastName}</p>

          <p className="p_time">
            {2023 - data?.publishDate.slice(0, 4)} Years Ago
          </p>
        </div>
      </div>
      <p className="ms-3 mt-2 mb-2">{data.message}</p>
    </div>
  );
};

export default CommentCard;
