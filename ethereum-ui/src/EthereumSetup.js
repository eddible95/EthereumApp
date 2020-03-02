import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8543"));
//const compiledContract = require('./build/MyContractA.json');

//let contractABI = compiledContract.abi;
let contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "firstNumber",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "sumNumbers",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "secondNumber",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_firstNumber",
        "type": "uint256"
      },
      {
        "name": "_secondNumber",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
]

let contractAddress='0x10731641e7C3B76731b0b00226fd992B98Dc5B83';

web3.eth.defaultAccount = web3.eth.accounts[0];

// When using web3 version 1.x.x
const myContractA = new web3.eth.Contract(contractABI, contractAddress);
export {myContractA};
