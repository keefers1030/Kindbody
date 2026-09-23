/**
 * Section switcher. Underline variant for page-level sections, pill variant for filters.
 * @startingPoint section="Navigation" subtitle="Underline and pill tab bars" viewport="700x180"
 */
export interface TabsProps {
  items: Array<string | { value: string; label: React.ReactNode }>;
  /** Controlled value. Omit to let Tabs manage its own state. */
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pill';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
