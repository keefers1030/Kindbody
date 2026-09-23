/**
 * Eyebrow + Domaine headline + optional intro and trailing action. The standard section opener.
 * @startingPoint section="Content" subtitle="Section opener with eyebrow, headline and action" viewport="700x240"
 */
export interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  /** "light" flips the ink for navy and photographic grounds. */
  tone?: 'navy' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Trailing element, usually a Button. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
