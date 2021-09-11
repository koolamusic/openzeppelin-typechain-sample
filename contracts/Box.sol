// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import Auth from access control
// import './access-control/Auth.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Box is Ownable {
    uint256 private _value;
    mapping(address => uint256) erc20Tracker;
    mapping(address => uint256) poolToken;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);
    event ErcTransfer(uint256 amount, address token);

    // Stores a new value in the contract
    function store(uint256 value) public onlyOwner {
        _value = value;
        emit ValueChanged(value);
    }

    function payWithERC(address _token, address _to, uint256 _amount) public {
        erc20Tracker[_to] = _amount;
        emit ErcTransfer(_amount, _token);
    }

    function approveWithdrawal(address _user) public onlyOwner returns(bool) {
        poolToken[_user] = erc20Tracker[_user];
        return true;
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}