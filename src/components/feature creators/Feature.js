import { ethers } from "ethers";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Swiper from "swiper";
import profile from "../../assets/Ellipse 7.png";
import nft from "../../assets/nft.webp";
import api from "../../server/api";
import constant from "../../utils/constant";
import { abi } from "./abi";
import Creator from "./creator";
import "./feature.css";


function Feature() {
  const auth = useSelector((state) => state.auth);
  const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  const inputRef = useRef();
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [creators, setCreators] = useState([]);

  function instance() {
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(constant.CONTRACT_ADDRESS, abi, signer);
    setContract(contract);
  }

  async function connectWallet() {
    if (!window.ethereum) return;
    const accountArray = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accountArray.length > 0) {
      const acc = accountArray[0];
      setAccount(acc);
      try{
        api.connectWallet(acc);
      }catch(error){
        
      }
      
    }
  }

  async function checkWalletConnected() {
    if (!window.ethereum) return;
    const accountArray = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (accountArray.length > 0) {
      setAccount(accountArray[0]);
    }
  }

  async function getTasks() {
    if (account && contract) {
      try {
        const result = await contract.getTasks();
        setTasks(result);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async function createNewTask(e) {
    e.preventDefault();
    if (account && contract) {
      if (!inputRef.current.value) return;
      try {
        setLoading(true);
        const transaction = await contract.createTask(inputRef.current.value);
        const receipt = await transaction.wait();
        if (receipt.status) {
          getTasks();
          inputRef.current.value = "";
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    checkWalletConnected();
    instance();
    api.topCreators().then((response)=>{
      setCreators(response.users.data);
    });
  }, []);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, contract]);

  return (
    <div className=" feature mx-auto mt-3 flex flex-col items-center p-4">
      {auth.token && <div className="rounded-xl featureCard mt-4 flex flex-col items-center p-5 justify-center ">
        <div className="flex items-center justify-between w-full">
          <h1>Your NFTS </h1>
          <div className="button">
            {account !== "" ? (
              <div className="text-white">
                {account.slice(0, 4)}...{account.slice(37)}
              </div>
            ) : (
              <button
                className="bg-slate-600 rounded-full p-2 text-white"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>

        <div className="  mt-4">
          <img className=" " src={nft} alt="nft image" />
        </div>
      </div>}
      <div className="w-full featureCard p-4 rounded-xl  mt-6 flex flex-col justify-evenly gap-3 ">
        <div className="flex justify-between">
          <h1>Featured creators </h1>
          {/* <p>view all</p> */}
        </div>

        <div className="creators">
          <ul className="flex flex-col items-start mt-2 gap-3">
            { creators.map((row, index)=>{
              return <Creator key={index} name={row.nickname} profile={row.avatar} balance={row.cnt}/>
            }) } 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feature;
