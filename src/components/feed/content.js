import React, { useEffect, useState } from 'react'
import api from '../../server/api';
import Card from "./card";
import CreatePost from "./createPost";
import { useSelector } from 'react-redux';

const Content = () => {
  const auth = useSelector((state) => state.auth);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getList=(page)=>{
    api.getTimelinePosts(page).then((result)=>{
      setPosts(result.list.data);
    });
  }

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

  useEffect(()=>{
    getList(currentPage);
  }, [auth.listener]);

  return (
    <div className="flex flex-col ml-12 gap-6  ">
    <CreatePost />
    {posts.map((row, index)=>{
      return <Card item={row} key={index} plus={()=>plus(index)} refresh={(s)=>refresh(index, s)} />
    })}
  </div>  )
}

export default Content