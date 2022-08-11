import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faBars,
  faRadio,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Category from "./option";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../../server/api";
import { logout } from "../../server/auth";
import { useEffect } from "react";
import { setCategories } from "../../server/global";

function Sidebar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const { categories } = useSelector((state) => state.global);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      api.getCategoryList().then((response) => {
        dispatch(setCategories(response.list));
      });
    }
  }, []);

  const sendLogout=()=>{
    api.logout().finally(()=>{
      dispatch(logout());
      setModal(false);
    });
  };

  return (
    <div className="sidebar textColor px-10 pt-5 flex flex-col justify-between w-1/5 fixed z-50 left-0">
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                <div className="flex justify-end p-2">
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6 pt-0 text-center ">
                  <svg
                    className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Та гарахдаа итгэлтэй байна уу?
                  </h3>
                  <button
                    data-modal-toggle="popup-modal"
                    onClick={() => sendLogout()}
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Тийм
                  </button>
                  <button
                    onClick={() => setModal(false)}
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Үгүй
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className=" flex-col gap-x-8">
        <ul className="flex gap-2 mt-6">
          <a href="" className="flex gap-2">
            <span>
              <FontAwesomeIcon color="var(--text-color)" icon={faBars} />
            </span>
            <h2 onClick={() => navigate("/")} className="cursor-pointer">
              Overview
            </h2>
          </a>
        </ul>
        <ul className="flex gap-2 mt-6">
          <a href="" className="flex gap-2">
            {" "}
            <span>
              <FontAwesomeIcon color="var(--text-color)" icon={faWallet} />
            </span>
            <h2 onClick={() => navigate("/Wallets")} className="cursor-pointer">
              Your Wallet
            </h2>
          </a>
        </ul>
        <ul className="flex gap-2 mt-6">
          <span>
            <FontAwesomeIcon color="var(--text-color)" icon={faRadio} />
          </span>
          <div>
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-white bg--700   font-medium rounded-lg text-m px-4  text-center inline-flex items-center "
              type="button"
            >
              Category
            </button>

            <div id="dropdown" className=" z-10 ml-4">
              <ul
                className=" py-1 text-sm  text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                {categories &&
                  categories.map((e) => (
                    <Category key={e.id} icon="fa fa-home" name={e.name} />
                  ))}
              </ul>
            </div>
          </div>
        </ul>
      </div>

      <div className=" flex-col gap-x-8 ">
        <ul className="flex gap-2 mt-6 cursor-pointer">
          <a href="" className="flex gap-2">
            {" "}
            <span>
              <FontAwesomeIcon color="var(--text-color)" icon={faGear} />
            </span>
            <h2 className="cursor-pointer">Setting</h2>
          </a>
        </ul>
        {auth.token && (
          <ul className="flex gap-2 mt-6 cursor-pointer ">
            <div className="flex gap-2 z-10">
              {" "}
              <span>
                <FontAwesomeIcon
                  color="var(--text-color)"
                  icon={faArrowRightFromBracket}
                />
              </span>
              <h2 onClick={() => setModal(true)} className="cursor-pointer  ">
                Logout
              </h2>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
