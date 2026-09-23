/** Native select styled to match Input, with a Lucide chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style' | 'children'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Strings, or { value, label } pairs. */
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
