import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let city = ["Chennai", "Madurai", "Thindukal", "Theni", "Kanchipuram"];

  const handleSelection = (item: string) => console.log(item);

  let [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <ListGroup
          items={city}
          heading="Citites"
          onSelectItem={handleSelection}
        />
      </div>
      <br />
      <br />
      <hr />
      {visible && (
        <Alert className="success" closeBtn={() => setVisible(false)}>
          Hello World
        </Alert>
      )}
      <Button buttonClick={() => setVisible(true)} color={"primary"}>
        This is my Button
      </Button>
    </>
  );
}

export default App;
