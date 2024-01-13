import { FormEvent, useRef } from "react";

const Forms = () => {
  const person = {
    name: "",
    age: 0,
    password: "",
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function formEvent(event: FormEvent) {
    event.preventDefault();
    nameRef.current !== null
      ? (person.name = nameRef.current.value)
      : console.log("Enter name");
    passwordRef.current !== null
      ? (person.password = passwordRef.current.value)
      : console.log("Enter age");
    ageRef.current !== null
      ? (person.age = parseInt(ageRef.current.value))
      : console.log("Enter the password");
    console.log(person);
  }

  return (
    <div>
      <form onSubmit={formEvent}>
        <div className="m-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="m-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <div className="m-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            className="form-control"
          />
        </div>
        <div className="m-3">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
