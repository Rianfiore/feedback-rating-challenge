import { Satisfaction } from 'types/index';

export interface SubtitleProps {
  theme: Satisfaction,
  disabled: boolean,
  size: string,
  fontWeight?: boolean,
  fontItalic?: boolean,
  fontUnderline?: boolean,
  children: string 
}