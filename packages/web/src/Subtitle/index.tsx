interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Text content */
  children: string;
}

const Subtitle = ({ children, ...props }: Props): JSX.Element => (
  <h6 { ...props }>
    {children}
  </h6>
)

export default Subtitle
