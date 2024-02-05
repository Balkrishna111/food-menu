import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

const BasketContent = () => {
  const item = {
    id: "ribs-brisket-and-burnt-ends",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Joe's KC BBQ",
    dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
    price: 110.99,
    rate: 4,
    country: "Kansas City, KS",
  };
  return (
    <div className='border-2 border-orange-400 p-2 my-2 text-xs'>
      <h1 className='font-bold border-b-2 border-orange-400 text-center text-gray-500 mb-4 text-lg'>
        Basket
      </h1>
      {/* <div className='titles flex justify-between my-4'>
        <h1>Product</h1>
        <h1>Quantity</h1>
        <h1>Price</h1>
        <h1>Remove</h1>
        <hr />
      </div> */}

      <div className='container'>
        <ul>
          <li>
            <div className='list flex justify-between items-center'>
              <div className='img flex justify-between items-center'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-16 md:w-24 rounded-lg flex items-center'
                />
              </div>
              <div className='name'>
                <p className='ml-4 text-xs md:text-sm'>{item.name}</p>
              </div>
              <div
                className='quantity-container
               flex items-center mx-2'
              >
                <button className='p-1 flex items-center text-xs md:text-sm justify-center mx-1 text-white bg-orange-400'>
                  <FaMinus />
                </button>
                {1}
                <button className='p-1 flex items-center justify-center mx-1 text-xs text-white bg-orange-400'>
                  <FaPlus />
                </button>
              </div>
              <div className='price flex items-center text-orange-400 text-xs md:text-sm'>
                ${item.price}
              </div>
              <div className='remove flex items-center mr-4'>
                <MdDelete
                  size={25}
                  className='text-orange-600 hover:text-red-600'
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BasketContent;
