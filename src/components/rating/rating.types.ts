import { Satisfaction } from 'types/index';

export interface RatingProps {
  maxStars: number
  updateStars: number
  rating: Satisfaction
}

export interface StarIconProps {
  theme: Satisfaction
  disabled?: boolean
  size?: number
  weight?: "fill" | "thin"
}