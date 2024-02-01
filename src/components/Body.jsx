import Menu from "./Menu";
import Sidebar from "./Sidebar";

const Body = ({ categories, getTitle, header, id }) => {
  return (
    <div className='flex'>
      <div className='sidebar w-3/12 bg-orange-100 h-full'>
        <Sidebar categories={categories} getTitle={getTitle} />
      </div>
      <div className='container w-9/12 '>
        <Menu categories={categories} header={header} id={id} />
      </div>
    </div>
  );
};
export default Body;
