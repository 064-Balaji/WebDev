interface Props {
  onSort: (category: string) => void;
}

const ExpenseSort = ({ onSort }: Props) => {
  return (
    <>
      <div className="m-3">
        <select
          onChange={(event) => onSort(event.target.value)}
          id="sort"
          className="form-select"
        >
          <option value="" selected>
            All categories
          </option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </>
  );
};

export default ExpenseSort;
