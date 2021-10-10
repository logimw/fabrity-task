import { HeadingPrimary, HeadingSecondary } from "./Title.styles";

const Title = ({ h1, children }) => {
  if (h1) return <HeadingPrimary>{children}</HeadingPrimary>;
  return <HeadingSecondary>{children}</HeadingSecondary>;
};

export default Title;
