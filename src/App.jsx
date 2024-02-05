import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import Home from "./Home";
import Basket from "./Basket";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='basket' element={<Basket />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
