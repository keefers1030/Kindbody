/** Centered modal over a 55% navy scrim. Closes on scrim click and on the close button. */
export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer actions, usually Buttons. */
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
