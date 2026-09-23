/** Navy tooltip on hover and focus. Short, non-essential help only. */
export interface TooltipProps {
  children?: React.ReactNode;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
