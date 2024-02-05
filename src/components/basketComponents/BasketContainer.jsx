import BasketContent from "./BasketContent";
import BasketInfo from "./BasketInfo";

const BasketContainer = () => {
  return (
    <div className='flex flex-col w-full p-5 gap-4 lg:flex-row lg:justify-between '>
      <div className='basketContent lg:w-1/2'>
        <BasketContent />
      </div>
      <div className='basketInfo lg:w-5/12'>
        <BasketInfo />
      </div>
    </div>
  );
};
export default BasketContainer;
