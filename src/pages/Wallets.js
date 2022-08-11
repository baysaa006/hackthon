import React, { useEffect, useState } from "react";
import AppBar from "../components/appbar/appBar";
import api from "../server/api";
import Content from "../components/feed/content";
import Feature from "../components/feature creators/Feature";
import Sidebar from "../components/sideBar/sideBar";
import WalletPro from "../components/walletPro/WalletPro";
import Card from "../components/feed/card";
import CardNfd from "../components/feed/nftCard";

export default function Wallets() {
  // Navigation

  const [categories, setCategries] = useState([]);

  useEffect(() => {
    api.getCategoryList().then((response) => {
      setCategries(response.list);
    });
  }, []);

  return (
    <div className="w-max">
      <div className="h-20">
        <AppBar />
      </div>

      <Sidebar categories={categories} />
      <div className="Content px-7">
        <WalletPro balance="2.548" />

        <div className="flex gap-5">
          <div className=" grid grid-cols-2 gap-8 w-3/4 mt-12">
            <CardNfd />
            <CardNfd />
            <CardNfd />
            <CardNfd />
            <CardNfd />
            <CardNfd />
          </div>

          <Feature />
        </div>
      </div>
    </div>
  );
}
