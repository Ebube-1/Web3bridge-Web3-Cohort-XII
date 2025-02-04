// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TestContract {
    // Public variables (auto getter functions are generated)
    bool public isActive = true;
    uint256 public count = 100;
    int256 public temperature = -20;
    address public owner;
    bytes32 public hashValue = keccak256(abi.encodePacked("Solidity"));

    // Private variables (accessible only within this contract)
    string private secretMessage = "Hidden!";
    uint8 private smallNumber = 25;

    // Internal variables (accessible within this contract & derived contracts)
    int internal internalNumber = -500;
    bytes internal data = "Hello";

    // External variables (cannot be directly accessed within the contract)
    // string external externalMessage;

    // Constructor (Runs once when deployed)
    constructor() {
        owner = msg.sender;
    }

    // Public function to modify state variables
    function updateBool(bool _status) public {
        isActive = _status;
    }

    function updateUint(uint256 _newCount) public {
        count = _newCount;
    }

    function updateInt(int256 _newTemperature) public {
        temperature = _newTemperature;
    }

    function updateAddress(address _newOwner) public {
        owner = _newOwner;
    }

    function updateBytes32(bytes32 _newHash) public {
        hashValue = _newHash;
    }

    // Private function (can only be called inside this contract)
    function updateSecretMessage(string memory _message) private {
        secretMessage = _message;
    }

    // Internal function (can be called in derived contracts)
    function updateInternalNumber(int _newNumber) internal {
        internalNumber = _newNumber;
    }

    // External function (can only be called from outside the contract)
    // function updateExternalMessage(string memory _message) external {
    //     externalMessage = _message;
    // }

    // 🔹 Getter for private variable (not auto-generated)
    function getSecretMessage() public view returns (string memory) {
        return secretMessage;
    }

}