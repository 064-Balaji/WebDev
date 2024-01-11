import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: "primary" | "secondary" | "success";
  closeBtn: () => void;
}

const Alert = ({ children, className, closeBtn }: Props) => {
  return (
    <div className={"alert alert-" + className}>
      {children}
      <button className="btn-close" onClick={closeBtn}></button>
    </div>
  );
};

export default Alert;
