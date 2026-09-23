/**
 * Primary call to action. Full pill, Gotham Bold uppercase at +.04em tracking.
 * @startingPoint section="Core" subtitle="Pill buttons in all five brand variants" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = yellow (the default CTA). navy = inverse-safe solid. outline / outline-light / ghost for secondary actions. */
  variant?: 'primary' | 'navy' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  iconLeft?: string;
  /** Lucide icon name rendered after the label — "arrow-right" is the house CTA. */
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
