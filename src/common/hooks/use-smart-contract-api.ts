import {
  Configuration,
  SmartContractsApi,
} from "@stacks/blockchain-api-client";

import { useNetwork } from "@common/hooks/use-network";

export const useSmartContractApi = () => {
  const network = useNetwork();
  const config = new Configuration({ basePath: network.coreApiUrl });
  return new SmartContractsApi(config);
};
