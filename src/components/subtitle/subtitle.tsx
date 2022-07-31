import {SubtitleProps} from "./subtitle.types"

import "./subtitle.scss";

export const Subtitle = ({theme, disabled = false, children}: SubtitleProps) => {
  
  return (
  <h2 className={`subtitle subtitle--${theme} ${disabled ? "subtitle--disabled" : ""}`}>
    {children}
  </h2>
  )
}