import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  const categories = [
    { title: "Our Foods", id: "our-foods" },
    { title: "Best Foods", id: "best-foods" },
    { title: "BBQs", id: "bbqs" },
    { title: "Breads", id: "breads" },
    { title: "Burgers", id: "burgers" },
    { title: "Chocolates", id: "chocolates" },
    { title: "Desserts", id: "desserts" },
    { title: "Drinks", id: "drinks" },
    { title: "Fried Chicken", id: "fried-chicken" },
    { title: "Ice Cream", id: "ice-cream" },
    { title: "Pizzas", id: "pizzas" },
    { title: "Porks", id: "porks" },
    { title: "Sandwiches", id: "sandwiches" },
    { title: "Sausages", id: "sausages" },
    { title: "Steaks", id: "steaks" },
  ];
  const [header, setHeader] = useState({ title: "Our Foods", id: "our-foods" });

  const getTitle = (title, id) => {
    useEffect(() => {
      setHeader({ title: title, id: id });
    }, [title]);
  };
  // console.log(header.id);
  return (
    <Provider store={store}>
      <Navbar categories={categories} />
      <Body
        categories={categories}
        id={header.id}
        getTitle={getTitle}
        header={header.title}
      />
    </Provider>
  );
}

export default App;
