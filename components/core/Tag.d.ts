/** Filter chip / removable token. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Renders a dismiss affordance when provided. */
  onRemove?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
