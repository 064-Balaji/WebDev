interface Props {
  bill: {
    name: string;
    count: number;
    price: number;
    total: number;
    final: number;
  }[];
}

const Total = ({ bill }: Props) => {
  return (
    <div className="mt-5 d-flex flex-column text-center">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {bill.map((val) => (
            <tr>
              <td>{val.name}</td>
              <td>{val.count}</td>
              <td>{val.price}</td>
              <td>{val.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {bill.length > 0 && bill[bill.length - 1] && (
            <tr>
              <td colSpan={3}>Total</td>
              <td>{bill[bill.length - 1].final}</td>
            </tr>
          )}
        </tfoot>
      </table>
      {bill.length > 0 && bill[bill.length - 1] && (
        <h4>Your total: Rs.{bill[bill.length - 1].final}/-</h4>
      )}
      <button className="btn btn-success mb-3">Pay and place order</button>
    </div>
  );
};

export default Total;
