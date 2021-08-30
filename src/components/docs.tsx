import * as React from "react";
import tw from "twin.macro";

import Text from "@components/text";
import { useBillboardContract } from "@common/hooks/use-billboard-contract";

const StyledArticle = tw.article`prose flex flex-col mx-auto`;

const Docs: React.FC<{}> = () => {
  const [contractAddress, contractName] = useBillboardContract();

  return (
    <StyledArticle>
      <h2>Notes</h2>
      <Text>
        This is an example application to demonstrate how to use Clarinet's{" "}
        <a
          href="https://docs.stacks.co/write-smart-contracts/devnet"
          target="_blank"
          rel="noreferrer"
        >
          local DevNet
        </a>{" "}
        feature. This React app is attempting to read a variable value from a
        Clarity smart contract running in a local Stacks testnet. If all
        elements are running correctly, the billboard above should display{" "}
        <code>Hello, world!</code>.
      </Text>
      <Text>
        In order for the billboard message to display, you must run{" "}
        <code>clarinet integrate</code> from the root of this repo in a local
        terminal. The <code>stacks-node</code>, <code>bitcoin-node</code> and{" "}
        <code>stacks-api</code> containers must have green status before the
        message will display.
      </Text>
      <h2>What is the app doing?</h2>
      <Text>
        The app is polling a local API endpoint every 30 seconds for the value
        of the <code>message</code> variable of the{" "}
        <code>{`${contractAddress}.${contractName}`}</code> smart contract on
        the local DevNet. The relevant code for the API call can be found in{" "}
        <a
          href="https://github.com/pgray-hiro/stacks-billboard/blob/main/src/common/hooks/use-billboard.ts"
          target="_blank"
          rel="noreferrer"
        >
          <code>src/common/hooks/use-billboard.ts</code>
        </a>
        .
      </Text>
      <Text>
        If the app receives an error from the local API endpoint, the billboard
        will display the text of the error.
      </Text>
      <h2>What is the app built with?</h2>
      <Text>
        The frontend app is built with{" "}
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noreferrer"
        >
          create-react-app
        </a>
        ,{" "}
        <a
          href="https://stacks-js-git-master-blockstack.vercel.app/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Stacks.js
        </a>
        , and{" "}
        <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
          Tailwind CSS
        </a>
        .
      </Text>
    </StyledArticle>
  );
};

export default Docs;
