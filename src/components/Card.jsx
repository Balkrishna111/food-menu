import { IoStarSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../app/features/foodSlice";
const Card = ({ food }) => {
  let ratingArr = [];

  const dispatch = useDispatch();

  for (let index = 0; index < food.rate; index++) {
    ratingArr.push(<IoStarSharp key={index} className='text-orange-400' />);
  }
  const [description, setDescription] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToBasket(food));
  };
  return (
    <div className='relative'>
      <div className='card max-w-36 m-4 p-2 border-2 border-orange-400 rounded-xl text-gray-600 min-h-80 flex flex-col justify-between'>
        <div className='img my-1'>
          <img className=' rounded-lg' src={food.img} alt='food/img' />
        </div>
        <div className='details'>
          <h1>{food.name}</h1>
          <p className='my-1'>${food.price}</p>
          <div className='rating flex'>
            {ratingArr.map((item) => {
              return item;
            })}
          </div>
          <button
            onClick={handleAddToCart}
            className='bg-orange-400 w-full rounded-full p-1 my-2 text-white hover:bg-orange-300'
          >
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
        <div className='absolute top-4 z-10 -left-24'>
          <div className='menu-details w-3/4 max-w-96 flex flex-col justify-center bg-orange-200 items-center border-2 border-orange-400 rounded-lg p-8 relative'>
            <div className='cross'>
              <RxCross2
                size={20}
                className='text-red-600 absolute top-2 right-2 cursor-pointer'
                onClick={() => setDescription(false)}
              />
            </div>
            <div className='img my-1 w-full'>
              <img className=' rounded-lg' src={food.img} alt='food/img' />
            </div>

            <div className='details flex flex-col items-center '>
              <h1>{food.name}</h1>
              <p className='my-1'>${food.price}</p>
              <div className='rating flex'>
                {ratingArr.map((item) => {
                  return item;
                })}
              </div>

              <p className='my-2 text-center'>{food.dsc}</p>
              <p className='my-2 text-center'>From: {food.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
