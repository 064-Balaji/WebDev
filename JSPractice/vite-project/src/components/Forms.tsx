import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "name at least needs 3 charcters"),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(12, "A ge must more than 12"),
  password: z.string().min(5, "password needs 5 Characters"),
});

type FormData = z.infer<typeof schema>;

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="m-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <div className="m-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="form-control"
          />
          {errors.password && (
            <p className="text-danger">{errors.password?.message}</p>
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
