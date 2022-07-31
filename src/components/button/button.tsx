import {ButtonProps} from "./button.types"

import "./button.scss";

export const Button = ({theme, disabled=false, children, click, }: ButtonProps) => {
  
  return (
  <button className={`button button--${theme} ${disabled ? "button--disabled" : ""}`} onClick={click}>
    {children}
  </button>
)}