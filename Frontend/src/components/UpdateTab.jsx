import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const UpdateTab = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActiveTab(path === "/" ? "home" : path.split("/")[1]);
  }, [location.pathname]);

  return (
    <div className="flex justify-center my-4">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <Link
            to="/"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === "home"
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/unitsup"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === "unitsup"
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
          >
            Unit
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/soldiersup"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === "soldiersup"
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
          >
            Soldier
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/commandersup"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === "commandersup"
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
          >
            Commander
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/equipmentsup"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === "equipmentsup"
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
          >
            Equipment
          </Link>
        </li>
        {/* <li className="me-2">
          <Link
            to="/missions"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'missions' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Mission
          </Link>
        </li> */}
        <li className="me-2">
          <Link
            to="/awardsup"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === "awardsup"
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
          >
            Awards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UpdateTab;
