import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import api from "../../server/api";
import "./feed.css";
import { useDispatch, useSelector } from "react-redux";
import { changeListener } from "../../server/auth";

const Card = ({ item, plus, refresh }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const generateNft=()=>{
    api.generateNft(item.id).then((result)=>{
      refresh(result.address);
    });
  };

  const ratePost = () => {
    try {
      api.ratePost(item.id).then(() => {
        dispatch(changeListener(new Date()));
      });
    } catch (error) {
      console.log("rate error: ", error);
    }
  };

  return (
    <div className="text-color2 postCard border-radius h-auto">
      <div className="flex items-center justify-between px-4 h-20">
        <div className="flex  items-center gap-4">
          {item.avatar ? (
            <img
              className="pro object-cover rounded-lg"
              src={item.avatar}
              alt=""
            />
          ) : (
            <div className="main-color rounded-full h-9 w-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} width="30px" />
            </div>
          )}

          <p>{item.nickname}</p>
        </div>
        <p className="text-1 ">{item.created_at}</p>
      </div>

      <img src={item.content_image} alt="" className="w-full h-auto" />
      <div className="mx-auto buttom-text flex flex-col gap-2 py-4">
        <h4 className="title">{item.title}</h4>
        <p>{item.content_text}</p>

        <div className="flex items-center justify-between ">
          <div
            className="flex  items-center gap-2 cursor-pointer"
            onClick={() => ratePost()}
          >
            <FontAwesomeIcon icon={faHeart} />
            <p>{item.like_count}</p>
          </div>
          <div></div>
          {
            item.is_nft > 0 ? <a target="_blank" href={'https://explorer.corexchain.io/transactions/'+item.nft_id} >{item.nft_id ? item.nft_id.slice(0,5)+"..."+item.nft_id.slice(item.nft_id.length-4,item.nft_id.length) :''}</a> : <button onClick={()=>generateNft()} className=" mintbtn rounded-xl active  ">
            MINT
       </button>
          }
          
          </div>
      </div>
    </div>
  );
};

export default Card;
