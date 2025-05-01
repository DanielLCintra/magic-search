// Mock simplificado para next/image
const NextImage = (props: any) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || "NextImage"} />;
};

export default NextImage;
