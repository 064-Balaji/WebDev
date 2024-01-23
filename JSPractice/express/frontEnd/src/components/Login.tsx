import { useState } from "react";

const Login = () => {
  const [fromData, setForm] = useState({
    email: "",
    password: "",
  });

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    console.log(fromData);
  };

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container  m-5 ">
      <form onSubmit={onsubmit}>
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
          <button className="btn btn-primary p-5 pt-2 pb-2">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
