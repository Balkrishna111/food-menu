import { useSelector } from "react-redux";
const BasketInfo = () => {
  const quantity = useSelector((state) => state.totalQuantity);
  const totalPrice = useSelector((state) => state.totalPrice);
  return (
    <div className='border-0 text-sm lg:text-lg font-bold bg-orange-400 py-2 px-4 text-white outline-none'>
      <h1 className='font-bold border-b-2 border-white text-center text-white mb-4'>
        Order Summary
      </h1>
      <div className='container flex flex-col lg:justify-evenly'>
        <div className='product-count flex justify-between'>
          <h1>Product Count:</h1>
          <h1>{quantity}</h1>
        </div>
        <div className='total flex justify-between my-4'>
          <h1>Subtotal:</h1>
          <h1>$ {totalPrice}</h1>
        </div>
        <div className='checkout w-full'>
          <button className='w-full rounded-full bg-white p-2 my-4 text-orange-400 hover:bg-orange-300 border-2 border-white hover:text-white'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default BasketInfo;
