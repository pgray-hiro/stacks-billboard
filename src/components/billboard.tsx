import * as React from "react";
import tw from "twin.macro";

import { useBillboard } from "@common/hooks/use-billboard";

const StyledBillboard = tw.div`rounded-lg font-bold text-2xl bg-gray-300 border shadow-lg p-10 mb-8`;
const StyledMessage = tw.div`flex items-center justify-center text-gray-600`;

const Billboard: React.FC<{}> = () => {
  const [message, loading, error] = useBillboard();

  const setMessage = () => {
    if (loading) {
      return "Loading...";
    } else if (error) {
      return `Error: ${error}`;
    } else {
      return message;
    }
  };

  return (
    <StyledBillboard>
      <StyledMessage>{setMessage()}</StyledMessage>
    </StyledBillboard>
  );
};

export default Billboard;
