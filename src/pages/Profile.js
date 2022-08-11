import React, { useEffect, useState } from "react";
import AppBar from "../components/appbar/appBar";
import api from "../server/api";
import Content from "../components/feed/content";
import Feature from "../components/feature creators/Feature";
import Sidebar from "../components/sideBar/sideBar";
import Pro from "../components/profile/Pro";
import CreatePost from "../components/feed/createPost";
import Card from "../components/feed/card";
import { useSelector } from "react-redux";

export default function Profile() {
  // Navigation
  const auth = useSelector((state) => state.auth);
  const [categories, setCategries] = useState([]);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getList = (page) => {
    api.getMyPosts(page).then((result) => {
      setPosts(result.list.data);
    });
  };

  const plus=(index) =>{
    let s = [...posts];
    s[index].like_count +=1;
    setPosts(s);
  }

  const refresh=(index, address)=>{
    let s = [...posts];
    s[index].nft_id =address;
    s[index].is_nft =1;
    setPosts(s);
  }

  useEffect(() => {
    getList(currentPage);
    api.getCategoryList().then((response) => {
      setCategries(response.list);
    });
  }, [auth.listener]);

  return (
    <div className="w-max">
      <div className="h-20">
        <AppBar />
      </div>

      <Sidebar categories={categories} />
      <div className="Content px-7  ">
        <div className="block">
          <Pro />
        </div>
        <wrapper className="flex ">
          <div className="flex w-3/5  flex-col  gap-2 ">
            <CreatePost />
            {posts.map((row, index) => {
              return <Card item={row} key={index}  plus={()=>plus(index)} refresh={(s)=>refresh(index, s)}/>;
            })}
          </div>
          <Feature />
        </wrapper>
      </div>
    </div>
  );
}
