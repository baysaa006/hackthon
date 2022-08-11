import React, { useState } from "react";
import profile from "../../assets/Ellipse 7.png";
import Pop from "./Pop";

const CreatePost = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="createPost mx-auto mt-8 flex flex-col gap-9">
      <div className="flex items-center gap-5 p-2">
        <img className="" src={profile} alt="" />
        <input
          type="button"
          className="text-color cursor-pointer post-input text-left"
          value=" Post NFT’s, digital arts, collections, etc..."
          onClick={() => {
            setIsOpen(true);
          }}
        />
        <Pop open={IsOpen} setOpen={(e) => setIsOpen(e)} />
      </div>
    </div>
  );
};

export default CreatePost;
