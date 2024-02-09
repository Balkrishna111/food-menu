import { useSelector } from "react-redux";
import CartListItem from "../CartListItem";

const BasketContent = () => {
  const cartItems = useSelector((state) => state.basket);

  return (
    <div className='border-2 border-orange-400 p-2 my-2 text-xs'>
      <h1 className='font-bold border-b-2 border-orange-400 text-center text-gray-500 mb-4 text-lg'>
        Basket
      </h1>

      <div className='container'>
        <ul>
          {cartItems.map((item, index) => (
            <CartListItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BasketContent;
