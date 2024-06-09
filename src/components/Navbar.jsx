import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const basketLength = useSelector((state) => state.basket.length);
  return (
    <>
      <nav className='w-full p-4 bg-orange-400 text-white flex justify-between items-center'>
        <div className='logo-container mr-6 cursor-pointer'>
          <Link to='/'>
            <h1>Logo</h1>
          </Link>
        </div>

        <div className='search-bar flex justify-center items-center relative'>
          <input
            type='text'
            placeholder='Search Here'
            className='px-3 py-1 border rounded-xl bg-white'
          />
          <CiSearch size={20} className='absolute text-orange-500 right-2' />
        </div>
        <div className='nav-links font-bold flex items-center gap-8 justify-center'>
          <Link to='/'>
            <h1 className='hover:text-gray-100 cursor-pointer'>Menu</h1>
          </Link>
          <Link to='/basket'>
            <h1 className='relative flex gap-2 items-center hover:text-gray-100 cursor-pointer'>
              Basket
              <span>
                <SlBasket size={20} />
                {basketLength > 0 && (
                  <span className='text-xs bg-white text-orange-400 rounded-full px-1 -top-3 -right-3 absolute'>
                    {basketLength}
                  </span>
                )}
              </span>
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
