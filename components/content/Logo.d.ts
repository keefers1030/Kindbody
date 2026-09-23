/**
 * The Kindbody wordmark / logomark with the guidelines' color and clear-space rules baked in.
 * @startingPoint section="Brand" subtitle="Wordmark variants incl. the yellow box for photography" viewport="700x180"
 */
export interface LogoProps {
  /** navy = primary. white = reverse. yellow = on navy. mark = parenthesis logomark (social/app avatar). */
  variant?: 'navy' | 'white' | 'yellow' | 'mark';
  /** Rendered width in px. */
  width?: number;
  /** Wraps the navy wordmark in a yellow box — required over photography and busy slides. */
  boxed?: boolean;
  /** Prefix for the asset path, e.g. "../../" when mounted from a nested page. */
  basePath?: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
