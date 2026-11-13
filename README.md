
# Decentralised Complaint and Grievance Management System

A blockchain-based complaint management platform that enables users to submit complaints, track their progress, and view status updates transparently using Ethereum blockchain technology.

## Problem Statement

PS15 – Decentralised Complaint and Grievance Management System.

Traditional complaint management systems may lack transparency, and complaints can be delayed, ignored, or modified. This project uses blockchain technology to maintain transparent and tamper-resistant complaint records.

## Features

- MetaMask wallet integration
- Submit complaints using a connected wallet
- Automatic unique complaint ID generation
- View complaints submitted by the user
- Track complaints using complaint ID
- View complete complaint status history
- Admin-only complaint status updates
- Dashboard displaying complaint statistics

## Complaint Statuses

- Submitted
- Under Review
- Resolved
- Rejected

## Technology Stack

- Solidity
- Ethereum Blockchain
- Ethereum Sepolia Testnet
- Remix IDE
- MetaMask
- Ethers.js
- HTML
- CSS
- JavaScript

## Project Structure

```text
Decentralised Complaint and Grievance Management System/
│
├── Contracts/
│   └── ComplaintManagement.sol
│
├── Problem Statement/
│
├── Screenshots/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## How It Works

1. Connect your MetaMask wallet.
2. Submit a complaint with its title and description.
3. The smart contract generates a unique complaint ID.
4. Users can view and track their complaints.
5. The administrator can update complaint statuses.
6. All status changes are recorded on the blockchain.

## Running Locally

1. Clone this repository.
2. Open the project in VS Code.
3. Install the Live Server extension.
4. Open `index.html` using Live Server.
5. Connect MetaMask to the Sepolia Testnet.
6. Interact with the deployed smart contract.

## Blockchain Network

Ethereum Sepolia Testnet.

## Project Type

Individual Blockchain Project.
