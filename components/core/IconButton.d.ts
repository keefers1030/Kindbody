/** Circular icon-only control. Always requires an accessible label. */
export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Accessible name — required, since there is no visible text. */
  label: string;
  variant?: 'primary' | 'navy' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
