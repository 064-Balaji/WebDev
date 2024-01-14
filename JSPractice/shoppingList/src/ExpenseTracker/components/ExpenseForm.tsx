import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  Description: z.string().min(3, "Description at least have 3 letters"),
  Amount: z
    .number({ invalid_type_error: "Amount only have Numbers" })
    .min(1)
    .max(100000),
  Category: z.enum(["Entertainment", "Groceries", "Utilities"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <div className="m-3 mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            {...register("Description")}
            id="Description"
            type="text"
            className="form-control"
          />
          {errors.Description && (
            <p className="text-danger">{errors.Description.message}</p>
          )}
        </div>
        <div className="m-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            {...register("Amount", { valueAsNumber: true })}
            id="Amount"
            type="text"
            className="form-control"
          />
          {errors.Amount && (
            <p className="text-danger">{errors.Amount.message}</p>
          )}
        </div>
        <div className="m-3">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <select {...register("Category")} id="sort" className="form-select">
            <option value=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.Category && (
            <p className="text-danger">{errors.Category.message}</p>
          )}
        </div>
        <div className="m-3">
          <button
            className="btn btn-primary"
            onClick={(event) => console.log(event)}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
