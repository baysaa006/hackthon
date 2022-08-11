import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Category = ({ icon, name }) => {
  return (
    <div>
      <li className="flex items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-600 ">
        <FontAwesomeIcon icon={icon} />
        <a
          href="#"
          className=" category block py-2 px-4 rounded-md hover:bg-gray-100  dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {name}
        </a>
      </li>
    </div>
  );
};

export default Category;
