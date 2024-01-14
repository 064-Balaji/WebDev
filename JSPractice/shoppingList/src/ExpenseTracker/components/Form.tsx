import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  description: z.string().min(5, "Description at least have 5 characters"),
  amount: z.number({ invalid_type_error: "Amount only have Numbers" }).min(2),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  submit: Function;
}

const Form = ({ submit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  type Myobj = {
    description: string[];
    amount: number[];
    category: string[];
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="m-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </div>
        <div className="m-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="text"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount?.message}</p>
          )}
        </div>
        <div className="m-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <button className="btn  btn-primary m-3 mt-1">submit</button>
      </form>
    </div>
  );
};

export default Form;
