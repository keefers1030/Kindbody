/** Single-line text field with uppercase label, optional leading icon, hint and error. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string;
  hint?: string;
  /** Replaces hint and turns the border red. */
  error?: string;
  /** Lucide icon name shown inside the field. */
  iconLeft?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
