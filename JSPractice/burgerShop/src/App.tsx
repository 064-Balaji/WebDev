import Contents from "./burgerShop/mainPage/Contents";
import Header from "./burgerShop/mainPage/Header";
import Custom from "./burgerShop/Custom/Custom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./burgerShop/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Contents />
            </>
          }
        />
        <Route
          path="/custom"
          element={
            <>
              <Header />
              <Custom />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Header />
              <Menu />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
