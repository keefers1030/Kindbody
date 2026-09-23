/** Brand-safe wrapper over the substituted Lucide icon set. */
export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "calendar", "arrow-right", "chevron-down"). */
  name: string;
  /** Pixel box. Use 20 inline with body copy, 24 in nav and buttons. */
  size?: number;
  /** Any CSS color; defaults to currentColor so icons inherit navy ink. */
  color?: string;
  strokeWidth?: number;
  /** Accessible name. Omit for decorative icons — the icon is then aria-hidden. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
