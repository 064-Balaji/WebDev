import { useState } from "react";

interface Props {
  children: String;
  maxChars?: number;
}

const ExpandleText = ({ children, maxChars = 100 }: Props) => {
  let [state, setState] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <>
      <p>{state === false ? children.substring(0, maxChars) : children}...</p>
      <button
        onClick={() => (state === false ? setState(true) : setState(false))}
        className="btn btn-primary"
      >
        {state === true ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandleText;
