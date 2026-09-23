/** A single proof number: Domaine figure over a Gotham Medium caption. */
export interface StatBlockProps {
  value: React.ReactNode;
  label: React.ReactNode;
  tone?: 'navy' | 'light';
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
