#!/usr/bin/env node

const {
  AnchorMode,
  broadcastTransaction,
  cvToHex,
  makeContractCall,
  stringUtf8CV,
} = require("@stacks/transactions");

const { StacksTestnet } = require("@stacks/network");

var argv = require("yargs/yargs")(process.argv.slice(2))
  .usage("Usage: $0 <message> [options]")
  .default({ a: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM", n: "billboard" })
  .demandCommand(1)
  .demandOption(["k"])
  .alias("k", "private-key")
  .describe("k", "private key")
  .alias("a", "address")
  .describe("a", "contract principal address")
  .alias("n", "contract-name")
  .describe("n", "contract name")
  .help("h")
  .alias("h", "help").argv;

const network = new StacksTestnet({ url: "http://localhost:3999" });

const txOptions = {
  contractAddress: argv.a,
  contractName: argv.n,
  functionName: "set-message",
  functionArgs: [stringUtf8CV(argv._[0])],
  senderKey: argv.k,
  validateWithAbi: true,
  network,
  anchorMode: AnchorMode.Any,
  postConditionMode: 1,
};

const transaction = makeContractCall(txOptions).then((txn) => {
  broadcastTransaction(txn, network);
  console.log(argv._[0]);
});
