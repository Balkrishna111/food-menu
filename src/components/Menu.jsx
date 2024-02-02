import { useEffect, useState } from "react";
import Card from "./Card";

const Menu = ({ active }) => {
  const URL = `http://localhost:3200/`;

  const [menu, setMenu] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(`${URL}${active.id}`);
      const data = await response.json();
      setMenu(data);
    };
    dataFetch();
  }, [active]);

  return (
    <div className=''>
      <div className='header border-b-2 border-orange-400'>
        <h1 className='text-center my-2 text-xl'>{active.title}</h1>
      </div>

      <div className='menu-container flex flex-wrap justify-around items-center'>
        {menu?.map((item, index) => (
          <Card food={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Menu;
