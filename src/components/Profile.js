import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import PostCard from "./PostCard";

const Profile = () => {
  let { id } = useParams();
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [proPost, setProPost] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const getData = () => {
    fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      method: "GET",
      headers: {
        "app-id": "63c8d645ab5b7b2d98a1c29e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setIsLoading(true);
      });
  };

  const getProfilePost = () => {
    fetch(`https://dummyapi.io/data/v1/user/${id}/post`, {
      method: "GET",
      headers: {
        "app-id": "63c8d645ab5b7b2d98a1c29e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProPost(data.data);
        setIsLoad(true);
      });
  };

  useEffect(() => {
    getData();
    getProfilePost();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!isLoading && <h2 className="loading mt-4">Loading...</h2>}
      {isLoading && (
        <>
          <div className="Profile-page col-10 mx-auto mt-5 p-2">
            <div className="profile_image">
              <img
                src={profile.picture}
                alt="sara"
                width={"250px"}
                height="250px"
              />
            </div>
            <div className="profile-details">
              <h1 className="mb-2">
                {profile.firstName + " " + profile.lastName}
              </h1>
              <h2 className="mb-2">
                {profile.location.city + ", " + profile.location.country}
              </h2>
              <h4 className="mb-2">
                Member since {profile.registerDate.slice(0, 4)}
              </h4>
              <p className="mb-2">{profile.email}</p>
              <p className="mb-2">{profile.phone}</p>
            </div>
          </div>
          <hr className="col-9 mx-auto" />
        </>
      )}
      {isLoad && <p className="text-center mt-4">All Posts</p>}
      {proPost.length >= 0 &&
        proPost.map((elem) => {
          return <PostCard key={elem.id} data={elem} />;
        })}
      <Footer />
    </>
  );
};

export default Profile;
