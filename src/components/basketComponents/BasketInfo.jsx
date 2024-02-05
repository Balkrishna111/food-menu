const BasketInfo = () => {
  return (
    <div className='border-0 text-sm lg:text-lg font-bold bg-orange-400 py-2 px-4 text-white outline-none'>
      <h1 className='font-bold border-b-2 border-white text-center text-white mb-4'>
        Order Summary
      </h1>
      <div className='container '>
        <div className='product-count flex justify-between'>
          <h1>Product Count:</h1>
          <h1>{0}</h1>
        </div>
        <div className='total flex justify-between my-4'>
          <h1>Subtotal:</h1>
          <h1>${0}</h1>
        </div>
        <div className='checkout w-full'>
          <button className='w-full rounded-full bg-white p-2 my-4 text-orange-400'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default BasketInfo;
