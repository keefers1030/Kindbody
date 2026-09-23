/**
 * Patient testimonial or press pull-quote. Set in Domaine Medium with curly quotes added automatically.
 * @startingPoint section="Content" subtitle="Testimonial grounds: card, cream, navy, plain" viewport="700x260"
 */
export interface QuoteProps {
  children?: React.ReactNode;
  /** Kindbody attributes patients by city, not name: "-St. Louis Patient". */
  attribution?: React.ReactNode;
  variant?: 'card' | 'cream' | 'navy' | 'plain';
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function Quote(props: QuoteProps): JSX.Element;
