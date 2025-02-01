# ScholarshipFund Smart Contract

## Overview
The ScholarshipFund smart contract allows individuals to donate funds for scholarships and enables the contract owner to distribute scholarships to students. The contract ensures secure fund management and prevents unauthorized withdrawals.

## Features
- *Donations:* Anyone can donate funds to the scholarship pool.
- *Scholarship Distribution:* The owner can award scholarships to students.
- *Fund Management:* The owner can withdraw remaining funds.
- *Transparency:* Donors and students can check their respective amounts.

## Contract Details

### State Variables
- owner: The address of the contract owner (set at deployment).
- donations: A mapping of donors' addresses to their total donation amounts.
- scholarships: A mapping of student addresses to awarded scholarship amounts.
- totalFunds: The total amount of funds in the contract.

### Modifiers
- onlyOwner: Restricts certain functions to be called only by the contract owner.

## Functions

### constructor()
- Sets the deployer as the contract owner.

### donate()
- Allows users to donate funds.
- *Requirements:*
  - The donation amount must be greater than 0.

### awardScholarship(address student, uint256 amount)
- Awards a scholarship to a student.
- *Requirements:*
  - Can only be called by the owner.
  - The student's address must be valid.
  - The amount must be greater than 0 and not exceed the available balance.

### getScholarshipAmount(address student) -> uint256
- Returns the total scholarship amount received by a student.

### getDonation(address donor) -> uint256
- Returns the total amount donated by a donor.

### withdraw()
- Allows the owner to withdraw all remaining funds.
- *Requirements:*
  - Can only be called by the owner.
  - The contract must have a positive balance.

## Security Considerations
- Only the owner can distribute scholarships and withdraw funds.
- Ensures valid student addresses and non-zero amounts.
- Prevents unauthorized withdrawals.

## License
This project is licensed under the MIT License.