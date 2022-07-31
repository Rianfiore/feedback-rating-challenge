import {Button, Title, Subtitle, Rating, Icon} from ".."
import {ArrowCircleLeft, ArrowCircleRight, SmileySad, SmileyMeh, Smiley, SmileyWink} from "phosphor-react"

import { useState, ReactNode } from "react"

import { Satisfaction } from "types"
import {CountProps} from "./count.types"
import {RatingEnum} from "./count.enum"

import "./count.scss"


export const Count = ({
  filter = "default",
  disabled = false,
  maxStars = 5,
  buttonBorder = "fill"
} : CountProps) => {

  const [stars, setStars] = useState(Math.floor(maxStars/2))
  const ratioStars = (stars / maxStars) * 100;
  
  const handleStars = (operator : "add" | "sub") : void => {
    const addStar = () => stars < maxStars-1 && setStars(stars+1)
    const subStar = () => stars > -1 && setStars(stars-1)

    switch(operator) {
      case "add":
       addStar()
        break;
      case "sub":
        subStar()
        break;
      default:
        break;
    }
  }

  const renderIcon = (ratioStars : number, size: number) : ReactNode => {
    switch(true) {
      case ratioStars < RatingEnum.sad:
        return <SmileySad size={size}/>;
      case ratioStars < RatingEnum.neutral:
        return <SmileyMeh size={size}/>;
      case ratioStars < RatingEnum.happy:
        return <Smiley size={size}/>;
        case ratioStars < RatingEnum.veryHappy:
          return <SmileyWink size={size}/>;
      default:
        return <SmileySad size={size}/>;
    }
  }

  const getRating = (ratioStars : number) : Satisfaction => {

  if (ratioStars < RatingEnum.sad) return "sad";
  if (ratioStars < RatingEnum.neutral) return "neutral";
  if (ratioStars < RatingEnum.happy) return "happy";
  if (ratioStars < RatingEnum.veryHappy) return "very-happy";
  return "sad"
  }

  return(
  <div className={`count count--${filter} count--${getRating(ratioStars)} ${disabled ? "count--disabled" : ""}`}>
    <Button click={() => handleStars("sub")} theme={getRating(ratioStars)} disabled={getRating(ratioStars) === "sad"}>
      <ArrowCircleLeft weight={buttonBorder} size={100}/>
    </Button>
    <div className="count__content">
      <Title theme={getRating(ratioStars)} disabled={disabled} size="big">
        Avaliação
      </Title>
      <Icon theme={getRating(ratioStars)}>
      {
        renderIcon(ratioStars, 400)
      }
      </Icon>
      <Rating maxStars={maxStars} updateStars={stars} rating={getRating(ratioStars)}/>
      <Subtitle theme={getRating(ratioStars)} disabled={disabled} size="small" >
        Seu feedback é importante pra gente :)
        </Subtitle>
    </div>
    <Button click={() => handleStars("add")} theme={getRating(ratioStars)} disabled={stars === maxStars - 1}>
    <ArrowCircleRight weight={buttonBorder} size={100}/>
    </Button>
  </div>
)}