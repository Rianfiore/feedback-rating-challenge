import { Satisfaction } from 'types/index';
import { ReactNode } from "react"

export interface ButtonProps {
  theme: Satisfaction
  disabled?: boolean
  children: ReactNode
  click?: () => void
}