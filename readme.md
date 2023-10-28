# NFT Collection Deploy and Transfer 
> Goerli to Mumbai Bridge

> Can Be Bridged between ETHERIUM and POLYGON Blockchain

> Used ERC721A for less Gas consumption


## Description

In this project, photos produced by Bing AI are used to install a 5-item NFT collection. A Goerli Ethereum Testnet ERC721A contract is deployed, and the NFTs are saved on IPFS using pinata.cloud. Functionalities like minting, transferring, and mapping the NFTs are included in the contract.

## Getting Started

### Prerequisites

* Hardhat Ethereum development environment setup; Node.js and npm installed.
* Goerli Testnet Configure Metamask * Goerli Test Account on Testnet Network

### Installation

1. Clone this repository,
2. Navigate to the project folder,
3. Install dependencies: `npm install`

### Wallet Config
- Network name : Goerli
- New RPC URL : https://rpc.ankr.com/eth_goerli
- Chain ID : 5
- Currency Symbo : ETH
- Block Explorer URL : https://goerli.etherscan.io
> Block Explorer URL is Optional

### Contract Name and Symbol

```solidity
contract Cyborg is ERC721A
```
Name : Cyborg  
Symbol :CYB 

The `Cyborg` contract extends the `ERC721A` contract and represents a collection of unique NFTs inspired by the Naruto series.

### Maximum Quantity of Tokens

```solidity
uint256 public maxLimit = 5;
```

### Base URL for NFTs (IPFS Base URL)

```solidity
string baseUrl = "https://gateway.pinata.cloud/ipfs/QmNhZHSxNk5JiQQ7uU2pDMoybgqeaRsnyzmRajnus326qR";
```
The base URL for the NFTs' metadata is specified by the `baseUrl` variable. The full URL for obtaining each NFT's IPFS platform-stored metadata will be created by combining this URL with the token ID.

### Prompt Description

```solidity
string public prompt = "Classical Cyborg dressed formally as hitman on the surface of the moon";
```

### Deploy ERC721A Contract to Goerli Testnet

1. Create an `.env` file and set your Ethereum wallet private key.
2. Configure Hardhat network settings in `hardhat.config.js`.
3. Run the deployment script: `npx hardhat run scripts/DEPLOYED.js --network goerli`

### Batch Mint NFTs

1. Edit the `Minted.js` script with required details.
2. Run the script: `npx hardhat run scripts/Minted.js --network goerli`

### Batch Transfer NFTs to Polygon Mumbai

1. Set up FxPortal Bridge for Ethereum to Polygon transfer.
2. Edit the `Deposited.js` script with necessary details.
3. Run the script: `npx hardhat run scripts/Deposited.js --network goerli`

### Check Balance 
1. Edit the `getBalance.js` script with required details.
2. Run the script: `npx hardhat run scripts/getBalance.js --network mumbai`

## Explorer Used
- [Goerli Testnet Explorer](https://goerli.etherscan.io)
- [Polygon PoS Chain Testnet Explorer](https://mumbai.polygonscan.com)

## Authors

- Priyanshu Vasava
- priyanshuvasava777@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

