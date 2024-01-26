import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useEffect, useState } from "react";

function App() {
  const categories = [
    { title: "Our Foods" },
    { title: "Best Foods" },
    { title: "BBQs" },
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
  const [header, setHeader] = useState("Our Foods");

  const getTitle = (title) => {
    useEffect(() => {
      setHeader(title);
    }, [title]);
  };
  return (
    <div>
      <Navbar categories={categories} />
      <Body categories={categories} getTitle={getTitle} header={header} />
    </div>
  );
}

export default App;
