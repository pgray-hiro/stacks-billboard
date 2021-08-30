import * as React from "react";
import tw from "twin.macro";

import Text from "@components/text";

const StyledHeader = tw.header`relative flex flex-wrap items-center justify-between px-2 py-3 mb-3`;

const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <Text tw="text-3xl font-bold">Stacks Billboard</Text>
    </StyledHeader>
  );
};

export default Header;
