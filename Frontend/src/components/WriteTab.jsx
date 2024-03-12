import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const WriteTab = () => {
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActiveTab(path === '/' ? 'home' : path.split('/')[1]);
  }, [location.pathname]);

  return (
    <div className="flex justify-center my-4">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <Link
            to="/"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'home' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Home
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/unit"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'units' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Unit
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/soldier"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'soldiers' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Soldier
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/commander"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'commanders' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Commander
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/equipment"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'equipments' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Equipment
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/mission"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'missions' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Mission
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/award"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 'awards' ? 'text-white bg-blue-600' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            Awards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WriteTab;
