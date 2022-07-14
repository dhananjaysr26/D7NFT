// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  // get Contract
  const nftContract = await ethers.getContractFactory("D7NFT");

  //Deploying NFT
  const deployedNFTContract = await nftContract.deploy();

  // printing the address of the deployed contract
  console.log("NFT Contract Address:", deployedNFTContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });