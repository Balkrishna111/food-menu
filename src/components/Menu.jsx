import { useEffect } from "react";
import Card from "./Card";

const Menu = ({ header, id }) => {
  const URL = `http://localhost:3200/`;

  console.log(id);

  const bbq = [
    {
      id: "ribs-brisket-and-burnt-ends",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Joe's KC BBQ",
      dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
      price: 110.99,
      rate: 4,
      country: "Kansas City, KS",
    },
  ];
  return (
    <div className='w-100%'>
      <div className='header border-b-2 border-orange-400'>
        <h1 className='text-center  my-2 text-xl'>{header}</h1>
      </div>

      <div className='menu-container'>
        {bbq.map((item) => (
          <Card food={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Menu;
