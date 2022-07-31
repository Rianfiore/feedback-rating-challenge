import {TitleProps} from "./title.types"

import "./title.scss";

export const Title = ({theme, disabled = false, children}: TitleProps) => (
  <h1 className={`title title--${theme} ${disabled ? "title--disabled" : ""}`}>
    {children}
  </h1>
)