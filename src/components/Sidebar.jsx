import { useState } from "react";

const Sidebar = ({ categories, getTitle }) => {
  const [active, setActive] = useState("Our Foods");
  getTitle(active);
  return (
    <div className='p-1 flex flex-col justify-center items-center'>
      <h1 className='inline-block my-3 text-gray-600'>Categories</h1>
      <ul className='flex flex-col justify-center items-center'>
        {categories.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setActive(item.title);
              }}
              className={`p-2 w-28 m-2 border-2 border-gray-300 text-gray-500 rounded-xl text-xs hover:bg-orange-300 hover:text-white hover:border-white ${
                active == item.title
                  ? "bg-orange-400 border-white text-white"
                  : ""
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
