import {IconProps} from "./icon.types"

import "./icon.scss";

export const Icon = ({theme, children}: IconProps) => (
  <div className={`icon icon--${theme}`}>
    {children}
  </div>
)