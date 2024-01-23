import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <hr className="m-0" />
              <Dashboard />{" "}
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header /> <hr className="m-0" />
              <Login />{" "}
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header /> <hr className="m-0" />
              <Register />{" "}
            </>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
