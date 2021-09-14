interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Text content */
  children: string;
}

const Title = ({ children, ...props }: Props): JSX.Element => (
  <h2 { ...props }>
    {children}
  </h2>
)

export default Title
