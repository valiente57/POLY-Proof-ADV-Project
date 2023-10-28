const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Cyborg.sol/Cyborg.json");

const tokenAddress = "0xd3Fe70425477347BfA4D1B36aa27649521f03482"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x3180631c1A6Ffdd26589aeaA989CE5DDA028Bf00"; // Ethereum public address for the wallet

async function main() {
    // Get the contract instance of the deployed ERC721A contract
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Log the total number of ERC721A tokens owned by the specified wallet address
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
 // Call the main function and handle any errors
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
