# Stacks Billboard

This project is an example full-stack application that uses Clarity smart contracts, Stacks.js, and React to read values from the Stacks blockchain through the Stacks API. The project uses [Clarinet](https://github.com/hirosystems/clarinet) to run a local development environment, allowing you to test the frontend against a running Stacks blockchain without interacting with a public testnet.

## Quick start

Make sure you have the [dependencies](#dependencies) installed.

To run this app locally against the Clarinet DevNet, you'll need to have two terminal windows open (or use a virtual terminal like screen). With the repository cloned locally, in the first terminal run the following command from the root of the local repository:

```sh
clarinet integrate
```

In the second terminal, start the frontend by running the following commands from the root of the repo:

```sh
yarn install
yarn run dev
```

Once the local DevNet is running, the billboard message will be displayed in the React frontend.

## Dependencies

This project has the following dependencies:

- [Clarinet](https://github.com/hirosystems/clarinet)
- [Docker](https://docs.docker.com/get-docker/)
- Node.js
- Yarn
