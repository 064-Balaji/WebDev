interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expense: Expenses[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Props) => {
  if (expense.length === 0) return null;

  return (
    <div className="m-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expense.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {expense
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
