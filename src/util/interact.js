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
	if (window.ethereum){
		try{
			const addressArray = await window.ethereum.request({
				method: "eth_requestAccounts"
			});
			const obj = {
				status: "write message in text-field",
				address: addressArray[0],
			}
			return obj;
		} catch(err) {
			const obj = {
				status: err.message,
				address: ""
			}
		}
	} else {
		return {
				status: "metamask not connected",
				address: ""
		}
	}
};

export const getCurrentWalletConnected = async () => {
	if (window.ethereum){
		try{
			const addressArray = await window.ethereum.request({
				method: "eth_accounts"
			});
			const obj = {
				status: "write message in text-field",
				address: addressArray[0],
			}
			return obj;
		} catch(err) {
			const obj = {
				status: err.message,
				address: ""
			}
		}
	} else {
		return {
				status: "metamask not connected",
				address: ""
		}
	}
  
};

export const updateMessage = async (address, message) => {
	if (!window.ethereum || address === null) {
			return {
      status:
        "💡 Connect your MetaMask wallet to update the message on the blockchain.",
    }
  }
	if (message.trim() === "") {
    return {
      status: "❌ Your message cannot be an empty string.",
    }
  }

	const transactionParameters = {
		to: contractAddress,
		from: address,
		data: helloWorldContract.methods.update(message).encodeABI()
	}

	try{
		const txHash = await window.ethereum.request({
			method: "eth_sendTransaction", 
			params: [transactionParameters]
		});
		return {
			status: (
      <span>
        ✅{" "}
        <a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>
          {`https://ropsten.etherscan.io/tx/${txHash}`}
        </a>
        <br />
        <p>Waiting for transaction to be mined</p>
      </span>
    ),
		}

  } catch (err) {
		return { status: err.message };
	}
  
};
