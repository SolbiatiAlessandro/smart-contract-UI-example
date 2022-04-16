import React from "react";
import { useEffect, useState } from "react";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
	contractAddress
} from "./util/interact.js";


const HelloWorld = () => {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network."); //default message
  const [newMessage, setNewMessage] = useState("");

  //called only once
  useEffect(async () => {
		const message = await loadCurrentMessage();
		setMessage(message);
		addSmartContractListener();

		const { address, status } = await getCurrentWalletConnected();
		setWallet(address);
		setStatus(status);

    addWalletListener();
  }, []);

  function addSmartContractListener() { 
		helloWorldContract.events.UpdatedMessages({}, (error, data) => {
			if (error) {
				setStatus(error.message);
			} else {
				setMessage(data.returnValues[1]);
				setNewMessage("");
				setStatus("Message was updated");
			}
		});
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => { 
		const connectWalletResponse = await connectWallet();
		console.log(connectWalletResponse);
		setStatus(connectWalletResponse.status);
		setWallet(connectWalletResponse.address);
  };

  const onUpdatePressed = async () => { 
		const updateMessageResponse = await updateMessage(walletAddress, newMessage);
		setStatus(updateMessageResponse.status);
  };

  //the UI of our component
  return (
    <div id="container">
		  <h2>What is this?</h2>
			<p>This is a UI to edit the smart contract {contractAddress} </p>
		  <p>Click on "connect wallet" to link your metamask (your ethereum account with which you sign transaction and you pay gas fees). The UI will call the smart contracts methods for you, for instance <i>HelloWorldContract.update(message)</i> using the web3.js APIs</p>
		<a href="https://ropsten.etherscan.io/address/0xE77328ee4B34f3cd7FaF39dD5dEc3537869e0BB9#code">View smart contract on etherscan at https://ropsten.etherscan.io/address/0xE77328ee4B34f3cd7FaF39dD5dEc3537869e0BB9#code</a>
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress && walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <h2 style={{ paddingTop: "50px" }}>Content of <i>string public message</i> on the smart contract:</h2>
      <p>{message}</p>

      <h2 style={{ paddingTop: "18px" }}>New Message:</h2>

      <div>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button id="publish" onClick={onUpdatePressed}>
          Call <i>function update(string memory newMessage)</i> on the smart contract
        </button>
      </div>
    </div>
  );
};

export default HelloWorld;
