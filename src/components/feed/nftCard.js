import React from "react";
import "./feed.css";
import profile from "../../assets/Ellipse 7.png";
import image from "../../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import coin from "../../assets/crx-logo.png";

const CardNfd = () => {
  return (
    <div className="text-color2 postCard border-radius h-auto">
      <img src={image} alt="" className="w-full h-auto" />
      <div className="mx-auto buttom-text flex flex-col gap-2 py-4">
        <div className="flex justify-between items-baseline">
          <h4 className="title text-lg">YoungZacharyYoung</h4>
          <p className="text-1 text-xs">Wednesday, April 6, 2022</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHeart} />
            <p>27</p>
          </div>
          <div className="flex gap-2 items-center">
            <img className="coinPro" src={coin} />
            <h4 className="title">2.35</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNfd;
