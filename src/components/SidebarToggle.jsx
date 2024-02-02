import { useState } from "react";

const SidebarToggle = ({ categories }) => {
  const [active, setActive] = useState({ title: "Our Foods", id: "our-foods" });
  return (
    <div className='p-1 flex flex-col justify-center items-center min-h-full'>
      <h1 className='inline-block my-3 text-gray-600'>Categories</h1>
      <ul className='flex flex-col justify-center items-center'>
        {categories?.map((item, index) => (
          <li key={index} className='w-full'>
            <button
              onClick={() => {
                setActive(item);
              }}
              className={` p-2 w-28 m-2 border-2 border-gray-300 text-gray-500 rounded-xl text-xs hover:bg-orange-300 hover:text-white hover:border-white ${
                active.title == item.title
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
export default SidebarToggle;
