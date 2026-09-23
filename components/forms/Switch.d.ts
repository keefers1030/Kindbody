/** Immediate-effect toggle. Use Checkbox for form submissions. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
