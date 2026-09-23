/**
 * Content container. Shadow or hairline — never both.
 * @startingPoint section="Core" subtitle="Card grounds: elevated, hairline, cream, navy, yellow" viewport="700x220"
 */
export interface CardProps {
  children?: React.ReactNode;
  variant?: 'elevated' | 'hairline' | 'cream' | 'navy' | 'yellow';
  /** Adds hover lift and pointer cursor. */
  interactive?: boolean;
  padding?: number | string;
  radius?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
