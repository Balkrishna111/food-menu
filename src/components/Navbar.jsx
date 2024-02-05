import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='w-full p-4 bg-orange-400 text-white flex justify-between items-center'>
        <div className='logo-container mr-6 cursor-pointer'>
          <Link to='/'>
            <h1>Logo</h1>
          </Link>
        </div>
        <div className='nav-links font-bold flex items-center gap-8 justify-center'>
          <Link to='/'>
            <h1 className='hover:text-gray-100 cursor-pointer'>Menu</h1>
          </Link>
          <Link to='/basket'>
            <h1 className='flex gap-2 items-center hover:text-gray-100 cursor-pointer'>
              Basket
              <span>
                <SlBasket size={20} />
              </span>
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
