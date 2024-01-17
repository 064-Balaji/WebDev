import Contents from "./burgerShop/mainPage/Contents";
import Header from "./burgerShop/mainPage/Header";
import Custom from "./burgerShop/Custom/Custom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          path="/menu"
          element={
            <>
              <Header />
              <Custom />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
