import React, { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/authSlice";
import Spinner from "./Spinner";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: { auth: AuthState }) => state.auth
  );

  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    console.log(formData);
  };

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-100  m-3">
      <form onSubmit={onsubmit} className="container">
        <div>
          <label htmlFor="name" className="form-label">
            User Name:
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            onChange={onchange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            type="text"
            className="form-control"
            onChange={onchange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            id="password"
            type="text"
            className="form-control"
            onChange={onchange}
          />
        </div>
        <div className="mt-4 justify-content-center w-100 d-flex">
          <button className="btn btn-primary p-5 pt-2 pb-2">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
