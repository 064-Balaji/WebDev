import { RiLoginCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import common from "../index.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex w-100">
      <div className="flex-grow-1 align-items-center">
        <Link to="/" className="text-decoration-none text-black">
          <h3 className="m-3">Goal Setter</h3>
        </Link>
      </div>
      <div className="d-flex flex-grow-2 justify-content-end">
        <Link
          to="/login"
          className="d-flex align-items-center m-3 column-gap-1 text-decoration-none text-black "
        >
          <RiLoginCircleFill size={26} />
          <h4>Login</h4>
        </Link>
        <Link
          to={"/register"}
          className="d-flex align-items-center m-3 column-gap-1 text-decoration-none text-black"
        >
          <FaUserAlt size={20} /> <h4 className={common.h4}>Register</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
