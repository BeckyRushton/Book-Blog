import React from "react";
import "./Title.scss";
import profileImg from "../../assets/images/blog-owner-image.jpg";

const Title = () => {
  return (
    <div className="title-section">
      <img
        className="title-section__image"
        src={profileImg}
        alt="blogpost-owner"
      />
      <h2 className="title-section__title">Becky's Book Blog</h2>

      <p className="title-section__tagline">
        Sharing my love of writing, characters and stories.
      </p>
    </div>
  );
};

export default Title;
