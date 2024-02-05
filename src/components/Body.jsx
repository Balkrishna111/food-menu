import { MdOutlineTune } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { useState } from "react";
import SidebarToggle from "./SidebarToggle";

const Body = ({ categories, getTitle }) => {
  // setting up active title

  const [active, setActive] = useState({
    title: "Ice Cream",
    id: "ice-cream",
  });

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className='body flex w-full relative'>
      {!sidebarToggle && (
        <MdOutlineTune
          className='absolute top-2 left-2 block md:hidden z-30'
          size={25}
          onClick={(e) => {
            e.preventDefault();
            setSidebarToggle(!sidebarToggle);
          }}
        />
      )}
      {sidebarToggle && (
        <RxCross2
          className='z-40 absolute top-1 left-2 text-red-600'
          size={20}
          onClick={(e) => {
            e.preventDefault();
            setSidebarToggle(!sidebarToggle);
          }}
        />
      )}

      <div
        className={`sidebar bg-orange-100 w-3/12 hidden md:flex md:justify-center`}
      >
        <Sidebar
          categories={categories}
          getTitle={getTitle}
          active={active}
          setActive={setActive}
        />
      </div>

      <div className='sidebar bg-orange-100 w-3/12 absolute z-10'>
        {sidebarToggle && (
          <SidebarToggle
            categories={categories}
            getTitle={getTitle}
            active={active}
            setActive={setActive}
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
          />
        )}
      </div>

      <div className='container w-full md:w-9/12'>
        <Menu categories={categories} active={active} />
      </div>
    </div>
  );
};
export default Body;
