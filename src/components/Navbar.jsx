const Navbar = () => {
  const categories = [
    { title: "Our Foods" },
    { title: "Best Foods" },
    { title: "bbqs" },
    { title: "Breads" },
    { title: "Burgers" },
    { title: "Chocolates" },
    { title: "Desserts" },
    { title: "Drinks" },
    { title: "Fried Chicken" },
    { title: "Ice Cream" },
    { title: "Pizzas" },
    { title: "Porks" },
    { title: "Sandwiches" },
    { title: "Sausages" },
    { title: "Steaks" },
  ];

  return (
    <nav className='w-full p-4 bg-gray-300 flex flex-col items-center'>
      <div className='w-full flex justify-between items-center'>
        <div className='logo-container mr-6'>
          <h1>Logo</h1>
        </div>
        <div className='details'>
          <p>
            We provide great food variety from different food outlets across
            Kathmandu.
          </p>
        </div>
      </div>
      <div className='w-full categories mt-10 flex '>
        <ul className='flex flex-wrap justify-center items-center'>
          {categories.map((item) => (
            <li>
              <button className='p-2 w-28 m-3 bg-gray-500 text-white rounded-md text-xs hover:bg-gray-600'>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
