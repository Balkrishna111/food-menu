import { MdOutlineTune } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Body = ({ categories, getTitle, active }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className='body flex w-screen relative'>
      <div className='sidebar bg-orange-100 w-3/12 hidden md:block'>
        <Sidebar categories={categories} getTitle={getTitle} />
      </div>

      <div className='container w-full md:w-9/12 relative '>
        <div className='filter-btn absolute top-3 left-3 md:hidden'>
          <MdOutlineTune
            size={25}
            onClick={(e) => {
              e.preventDefault();
              setSidebarToggle(!sidebarToggle);
            }}
            className='text-gray-700 hover:text-gray-500'
          />

          <div
            className={`slide-sidebar absolute duration-300 top-0 -ml-3 bg-orange-200 px-4 z-20 w-fit -translate-x-full ${
              sidebarToggle ? "translate-x-0" : ""
            }`}
          >
            <RxCross2
              size={20}
              className='text-red-600 absolute top-2 right-2 cursor-pointer'
              onClick={(e) => {
                e.preventDefault();
                setSidebarToggle(!sidebarToggle);
              }}
            />
            <Sidebar categories={categories} getTitle={getTitle} />
          </div>
        </div>
        <Menu categories={categories} active={active} />
      </div>
    </div>
  );
};
export default Body;
