pragma solidity ^0.5.3;

contract MyContractB {

  uint public firstNumber;
  uint public secondNumber;

  constructor (uint _firstNumber, uint _secondNumber) public {
    firstNumber = _firstNumber;
    secondNumber = _secondNumber;
  }

  function subtractNumbers() external view returns (uint) {
    return firstNumber - secondNumber;
  }
}
