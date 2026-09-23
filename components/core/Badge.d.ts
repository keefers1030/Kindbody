/** Small uppercase status or category marker. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'navy' | 'yellow' | 'rose' | 'cream' | 'success' | 'warning' | 'error';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
