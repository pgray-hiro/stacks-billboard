import * as React from "react";
import tw from "twin.macro";

const StyledText = tw.span`text-base text-gray-600`;

const Text: React.FC<{}> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
