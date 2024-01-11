interface Props {
  children: String;
  buttonClick: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, buttonClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={buttonClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
