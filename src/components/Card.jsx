import { IoStarSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Card = () => {
  let ratingArr = [];
  const bbq = {
    id: "ribs-brisket-and-burnt-ends",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Joe's KC BBQ",
    dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
    price: 110.99,
    rate: 4,
    country: "Kansas City, KS",
  };
  for (let index = 0; index < bbq.rate; index++) {
    ratingArr.push(<IoStarSharp key={index} className='text-orange-400' />);
  }
  const [description, setDescription] = useState(false);
  return (
    <div className='relative'>
      <div className='card max-w-40 m-4 p-2 border-2 border-orange-400 rounded-xl text-gray-600'>
        <div className='img my-1'>
          <img className=' rounded-lg' src={bbq.img} alt='food/img' />
        </div>
        <div className='details'>
          <h1>{bbq.name}</h1>
          <p className='my-1'>${bbq.price}</p>
          <div className='rating flex'>
            {ratingArr.map((item) => {
              return item;
            })}
          </div>
          <button className='bg-orange-400 w-full rounded-full p-1 my-2 text-white hover:bg-orange-300'>
            Add To Cart
          </button>
          <button
            onClick={() => setDescription(true)}
            className='text-xs border-2 border-orange-300 w-full rounded-full p-1 my-1 hover:bg-orange-50'
          >
            See More
          </button>
        </div>
      </div>

      {/* details container */}

      {description && (
        <div className='absolute top-4 w-full -left-12'>
          <div className='menu-details w-3/4 max-w-96 flex flex-col justify-center bg-orange-200 items-center border-2 border-orange-400 rounded-lg p-8 relative'>
            <div className='cross'>
              <RxCross2
                size={20}
                className='text-red-600 absolute top-2 right-2 cursor-pointer'
                onClick={() => setDescription(false)}
              />
            </div>
            <div className='img my-1 w-full'>
              <img className=' rounded-lg' src={bbq.img} alt='food/img' />
            </div>

            <div className='details flex flex-col items-center '>
              <h1>{bbq.name}</h1>
              <p className='my-1'>${bbq.price}</p>
              <div className='rating flex'>
                {ratingArr.map((item) => {
                  return item;
                })}
              </div>

              <p className='my-2 text-center'>{bbq.dsc}</p>
              <p className='my-2 text-center'>From: {bbq.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
