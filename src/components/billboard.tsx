import * as React from "react";
import tw from "twin.macro";

import { useBillboard } from "@common/hooks/use-billboard";

const StyledBillboard = tw.div`rounded-lg font-bold text-2xl bg-gray-300 border shadow-lg p-10`;
const StyledMessage = tw.div`flex items-center justify-center text-gray-600`;

const Billboard: React.FC<{}> = () => {
  const [message] = useBillboard();

  return (
    <StyledBillboard>
      <StyledMessage>{message}</StyledMessage>
    </StyledBillboard>
  );
};

export default Billboard;
