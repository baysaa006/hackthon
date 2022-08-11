import React from "react";
import AppBar from "../components/appbar/appBar";
import Feature from "../components/feature creators/Feature";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sideBar/sideBar";

export default function Home() {

  return (
    <div className="w-max">
      <div className="h-20">
        <AppBar />
      </div>

      <div className="Content px-7 flex">
        <Sidebar/>
        <Feed />
        <Feature />
      </div>
    </div>
  );
}
