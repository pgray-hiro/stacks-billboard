export const devnet = process.env.NODE_ENV === "development";
export const BILLBOARD_CONTRACT = devnet
  ? "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.billboard"
  : "testnet_contract";
export const STACKS_API_URL = devnet
  ? "http://localhost:3999"
  : "https://stacks-node-api.testnet.stacks.co";
