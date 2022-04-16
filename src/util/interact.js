require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
console.log(process.env);
const web3 = createAlchemyWeb3(alchemyKey);


const contractABI = require("../contract-abi.json");
const contractAddress = "0xE77328ee4B34f3cd7FaF39dD5dEc3537869e0BB9"
export const helloWorldContract = new web3.eth.Contract(
	contractABI,
	contractAddress
);


export const loadCurrentMessage = async () => { 
	const message = await helloWorldContract.methods.message().call();
	return message;
};

export const connectWallet = async () => {
  
};

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};
