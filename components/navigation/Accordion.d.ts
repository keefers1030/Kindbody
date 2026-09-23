/** FAQ list. Domaine question, Gotham answer, hairline dividers, plus/minus affordance. */
export interface AccordionProps {
  items: Array<{ title: React.ReactNode; content: React.ReactNode }>;
  allowMultiple?: boolean;
  /** Indices open on mount. */
  defaultOpen?: number[];
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
