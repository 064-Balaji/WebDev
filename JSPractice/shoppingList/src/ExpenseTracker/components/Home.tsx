import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseSort from "./ExpenseSort";
import ExpenseForm from "./ExpenseForm";
import { FieldValues } from "react-hook-form";

const Home = () => {
  const [list, setList] = useState([
    { id: 0, description: "milk", amount: 30, category: "Groceries" },
    { id: 1, description: "headphone", amount: 500, category: "Entertainment" },
    { id: 2, description: "charger", amount: 100, category: "Utilities" },
    { id: 3, description: "biscuit", amount: 5, category: "Groceries" },
  ]);

  function onDelete(id: number) {
    setList(list.filter((value) => value.id !== id));
  }

  const [category, setCategory] = useState("");

  const visibleExpense = category
    ? list.filter((e) => e.category === category)
    : list;

  function onSubmit(data: FieldValues) {
    setList([
      ...list,
      {
        id: list.length,
        description: data.Description,
        amount: data.Amount,
        category: data.Category,
      },
    ]);
  }

  return (
    <>
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseSort onSort={(category) => setCategory(category)} />
      <ExpenseList expense={visibleExpense} onDelete={onDelete} />
    </>
  );
};

export default Home;
