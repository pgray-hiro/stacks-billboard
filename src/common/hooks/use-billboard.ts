import { useCallback, useEffect, useState } from "react";
import { cvToString, hexToCV } from "@stacks/transactions";
import useInterval from "@use-it/interval";

import { useBillboardContract } from "@common/hooks/use-billboard-contract";
import { useSmartContractApi } from "@common/hooks/use-smart-contract-api";

export const useBillboard = () => {
  const client = useSmartContractApi();
  const [contractAddress, contractName] = useBillboardContract();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getMessage = useCallback(() => {
    const request = {
      contractAddress,
      contractName,
      functionName: "get-message",
      readOnlyFunctionArgs: {
        arguments: [],
        sender: contractAddress,
      },
    };

    client
      .callReadOnlyFunction(request)
      .then((response) => {
        setError("");

        if (response.okay && response.result) {
          const msg = cvToString(hexToCV(response.result)).slice(2, -1);
          setMessage(msg);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [client, contractAddress, contractName]);

  // Run the getMessage function at load to get the message from the contract
  useEffect(getMessage, [getMessage]);

  // Poll the Stacks API every 30 seconds looking for changes
  useInterval(getMessage, 30000);

  return [message, loading, error];
};
