/** The eyebrow style from the type hierarchy: Gotham Bold, uppercase, +10 tracking. */
export interface EyebrowProps {
  children?: React.ReactNode;
  tone?: 'navy' | 'muted' | 'cream' | 'yellow';
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
