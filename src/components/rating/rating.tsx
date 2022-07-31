import {RatingProps, StarIconProps} from "./rating.types"
import { Star } from "phosphor-react";

import "./rating.scss";

const StarIcon = ({ theme, disabled=false, size=30, weight="fill"} : StarIconProps) => (
  <div className={`rating__star-icon rating__star-icon--${theme} ${disabled ? "rating__star-icon--disabled" : ""}`}>
  <Star size={size} weight={weight}/>
  </div>
)

export const Rating = ({ maxStars = 5, updateStars, rating}: RatingProps) => {
  
  const maxStarsArray = []

  for(let i = 0; i < maxStars; i++) {
    maxStarsArray.push(i)
  }

  return(
  <div className={`rating`}>
    {maxStarsArray.map((star) => 
          star <= updateStars ?
          <StarIcon key={star} theme={rating} size={50} weight={"fill"}/>
          : <StarIcon key={star} theme={rating} size={50} weight="fill" disabled/>
    )}
  </div>
)}