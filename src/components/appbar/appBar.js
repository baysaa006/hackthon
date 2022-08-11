import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSmile,
  faUser,
  faBell,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import mainLogo from "../../assets/mainLogo.png";
import "./Appbar.css";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  return (
    <div className="w-full appbar h-1/6 bg-main-color flex fixed">
      <div className="flex items-center justify-center gap-3 py-5 px-8  ">
        <div className="flex items-center w-full gap-5 ">
          <img
            onClick={() => navigate("/home")}
            className="mainLogo cursor-pointer"
            src={mainLogo}
            alt="mainLogo"
          />

          <h1>Icontent</h1>
        </div>
      </div>
      <div className="flex items-center w-3/5 bg-main-color  p-2">
        <div className="w-1/3 ml-4">
          <div className="flex items-center">
            <div>
              <FontAwesomeIcon
                icon={faSmile}
                className="iconSmile text-brand-color px-2"
              />
            </div>
            <h3>Discover NFT & Digital Art</h3>
          </div>
        </div>

        <div className="h-8 items-center flex justify-center w-1/2 relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="icon pl-3 absolute left-0"
          />
          <input
            type="text"
            className="w-full pl-10 text-color items-end back-color h-8 border-none outline-none rounded-xl "
          />
        </div>
      </div>
      <div className="ringicon flex items-center pr-8">
        <FontAwesomeIcon icon={faBell} className="icon cursor-pointer" />
      </div>
      <div className="tail  flex  justify-center items-center gap-10">
        <div onClick={() => navigate("/Profile")}>
          <FontAwesomeIcon
            icon={faUser}
            className=" icon color-gray-500 cursor-pointer"
          />
        </div>
        <div
          onClick={() => navigate("/Profile")}
          className="personal cursor-pointer"
        >
          {auth.token ? (
            <>
              <p className="font-light">{auth.nickname} </p>
              <div className="flex gap-2 items-center">
                {/* <FontAwesomeIcon color="var(--text-color)" icon={faEthereum} />
            <p>2,475</p> */}
              </div>
            </>
          ) : (
            <a href="/login" className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon color="var(--text-color)" icon={faSignIn} />
              <p> Нэвтрэх</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
