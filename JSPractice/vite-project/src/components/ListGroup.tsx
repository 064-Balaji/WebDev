import { Fragment } from "react";

const city = ["Chennai", "Madurai", "Thindukal", "Theni", "Kanchipuram"];

function ListGroup() {
  return (
    <Fragment>
      <h1>Vankam da Mapla from</h1>
      <ul className="list-group">
        {city.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
