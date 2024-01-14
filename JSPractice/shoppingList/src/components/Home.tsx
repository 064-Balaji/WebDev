import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const sortRef = useRef<HTMLSelectElement>(null);
const schema = z.object({
  description: z.string().min(5, "Description at least have 5 characters"),
  amount: z.number({ invalid_type_error: "Amount only have Numbers" }).min(2),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const Home = () => {
  const [list, setList] = useState({
    description: ["milk", "headphone", "pen"],
    amount: [20, 500, 10],
    category: ["Groceries", "Entertainment", "Utility"],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function submit(data: FieldValues) {
    setList({
      ...list,
      description: [...list.description, data.description],
      amount: [...list.amount, parseInt(data.amount)],
      category: [...list.category, data.category],
    });
    console.log(list);
  }

  function sorted() {
    const state = sortRef.current?.value;
    if (state !== "default") {
      const filteredList = {
        description: [""],
        amount: [0],
        category: [""],
      };

      list.category.forEach((category, index) => {
        if (category === state) {
          filteredList.description.push(list.description[index]);
          filteredList.amount.push(list.amount[index]);
          filteredList.category.push(list.category[index]);
        }
      });

      console.log(filteredList);
    }
  }

  return (
    <>
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

      <div className="m-3">
        <select
          ref={sortRef}
          onChange={sorted}
          id="sort"
          className="form-select"
        >
          <option value="default" selected>
            all categories
          </option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <div className="m-3 mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(list).map((key, index) => (
              <tr key={key}>
                <td>{list.description[index]}</td>
                <td>{list.amount[index]}</td>
                <td>{list.category[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
