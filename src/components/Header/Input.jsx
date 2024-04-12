import { forwardRef } from "react";
import "../styles/input.css";

export const Input = forwardRef(({ ...props }, ref) => {
  return <input ref={ref} className="input" {...props} />;
});
