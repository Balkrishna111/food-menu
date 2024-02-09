import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
} from "../app/features/foodSlice";

const CartListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li className='my-2'>
      <div className='list flex justify-between items-center'>
        <div className='img flex justify-between items-center'>
          <img
            src={item.img}
            alt={item.name}
            className='w-16 md:w-24 rounded-lg flex items-center'
          />
        </div>
        <div className='name'>
          <p className='ml-4 text-xs md:text-sm w-[120px] md:w-[200px]'>
            {item.name}
          </p>
        </div>
        <div
          className='quantity-container
               flex items-center mx-2'
        >
          <button className='p-1 flex items-center text-xs md:text-sm justify-center mx-1 text-white bg-orange-400'>
            <FaMinus onClick={() => dispatch(decreaseQuantity(item.id))} />
          </button>
          {item.quantity}
          <button className='p-1 flex items-center justify-center mx-1 text-xs text-white bg-orange-400'>
            <FaPlus onClick={() => dispatch(increaseQuantity(item.id))} />
          </button>
        </div>
        <div className='price flex items-center text-orange-400 text-xs md:text-sm'>
          ${item.price}
        </div>
        <div className='remove flex items-center mr-4'>
          <MdDelete
            size={25}
            className='text-orange-600 hover:text-red-600 cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeFromBasket(item));
            }}
          />
        </div>
      </div>
    </li>
  );
};
export default CartListItem;
