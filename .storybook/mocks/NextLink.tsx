// Mock simplificado para next/link
const NextLink = ({ href, children, ...rest }: any) => {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

export default NextLink;
