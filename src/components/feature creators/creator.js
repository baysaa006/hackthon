import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import coin from "../../assets/crx-logo.png";
const Creator = ({ profile, balance, name }) => {
  return (
    <li className="flex items-center w-full pr-2 justify-between">
      <div className="flex items-center gap-1">
        {profile ? (
          <img className="pro object-cover" src={profile} alt="profile" />
        ) : (
          <div className="main-color rounded-full h-9 w-9 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faUser}
              width="30px"
              color="var(--text-color)"
            />
          </div>
        )}

        <p className="font-normal text-sm"> {name}</p>
      </div>

      <div className="balance flex justify-center items-center gap-2">
        <img className="coinPro" src={coin} /> <h2>{balance}</h2>
      </div>
    </li>
  );
};

export default Creator;
