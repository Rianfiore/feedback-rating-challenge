import { Satisfaction } from 'types/index';

export interface TitleProps {
  theme: Satisfaction,
  disabled: boolean,
  size: string,
  fontWeight?: boolean,
  fontItalic?: boolean,
  fontUnderline?: boolean,
  children: string
}