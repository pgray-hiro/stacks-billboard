import * as React from "react";
import tw from "twin.macro";

import Text from "@components/text";

const StyledFooter = tw.footer`flex justify-center mt-8`;

const Footer: React.FC<{}> = () => {
  return (
    <StyledFooter>
      <Text>
        Made with <span tw="mr-2">❤️</span> by pgray
      </Text>
    </StyledFooter>
  );
};

export default Footer;
