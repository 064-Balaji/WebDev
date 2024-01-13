import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import ExpandleText from "./components/ExpandleText";
import Forms from "./components/Forms";

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
      <br />
      <br />
      <hr />
      <ExpandleText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque in,
        libero accusantium optio labore dolorum recusandae voluptate saepe
        doloribus qui voluptatem rerum suscipit vero beatae eius fugit vel ad.
      </ExpandleText>
      <br />
      <br />
      <hr />
      <Forms />
    </>
  );
}

export default App;
