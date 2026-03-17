// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AtonCommitment {

    struct Commitment {
        address user;
        bytes32 hash;
        uint256 timestamp;
    }

    Commitment[] public commitments;

    event CommitmentSubmitted(address indexed user, bytes32 hash);

    function submitCommitment(bytes32 _hash) public {
        commitments.push(Commitment(msg.sender, _hash, block.timestamp));
        emit CommitmentSubmitted(msg.sender, _hash);
    }

    function getCommitment(uint index) public view returns (Commitment memory) {
        return commitments[index];
    }

    function totalCommitments() public view returns (uint) {
        return commitments.length;
    }
}
