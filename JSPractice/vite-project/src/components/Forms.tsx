import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: String;
  age: number;
  password: String;
}

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 5 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">Name field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">Atleast 5 characters required</p>
          )}
        </div>
        <div className="m-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age?.type === "required" && (
            <p className="text-danger">Age required</p>
          )}
        </div>
        <div className="m-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password", { required: true, minLength: 5 })}
            id="password"
            type="password"
            className="form-control"
          />
          {errors.age?.type === "required" && (
            <p className="text-danger">Password required</p>
          )}
          {errors.age?.type === "minLength" && (
            <p className="text-danger">Password at least 5 characters</p>
          )}
        </div>
        <div className="m-3">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
