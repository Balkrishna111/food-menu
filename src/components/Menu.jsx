import Card from "./Card";

const Menu = ({ header }) => {
  return (
    <div className='w-100%'>
      <div className='header border-b-2 border-orange-400'>
        <h1 className='text-center  my-2 text-xl'>{header}</h1>
      </div>

      <div className='menu-container'>
        <Card />
      </div>
    </div>
  );
};
export default Menu;
