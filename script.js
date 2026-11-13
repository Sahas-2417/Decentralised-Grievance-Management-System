
// ==========================================
// DECENTRALISED COMPLAINT MANAGEMENT SYSTEM
// Smart Contract + ABI + Ethers.js + MetaMask
// ==========================================

// 1. CONTRACT CONFIGURATION

const CONTRACT_ADDRESS = "0x8907Cadc9f13A97217F74857905404066354bd76";

const SEPOLIA_CHAIN_ID = "0xaa36a7";


// 2. SMART CONTRACT ABI

const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "complaintId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum ComplaintManagement.Status",
        "name": "newStatus",
        "type": "uint8"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "updatedBy",
        "type": "address"
      }
    ],
    "name": "ComplaintStatusUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "complaintId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "submittedBy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "title",
        "type": "string"
      }
    ],
    "name": "ComplaintSubmitted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "submitComplaint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_complaintId",
        "type": "uint256"
      },
      {
        "internalType": "enum ComplaintManagement.Status",
        "name": "_newStatus",
        "type": "uint8"
      }
    ],
    "name": "updateComplaintStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "complaintCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "complaints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "complaintId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "submittedBy",
        "type": "address"
      },
      {
        "internalType": "enum ComplaintManagement.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllComplaintIds",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_complaintId",
        "type": "uint256"
      }
    ],
    "name": "getComplaintDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "enum ComplaintManagement.Status",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_complaintId",
        "type": "uint256"
      }
    ],
    "name": "getComplaintHistory",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum ComplaintManagement.Status",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "updatedBy",
            "type": "address"
          }
        ],
        "internalType": "struct ComplaintManagement.StatusUpdate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDashboardStats",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyComplaints",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingComplaints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rejectedComplaints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "resolvedComplaints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalComplaints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]


// 3. GLOBAL VARIABLES

let provider;
let signer;
let contract;

let currentAccount = null;
let isAdmin = false;


// 4. STATUS DEFINITIONS

const STATUS = {
    0: "Submitted",
    1: "Under Review",
    2: "Resolved",
    3: "Rejected"
};


// 5. HELPER FUNCTIONS

function showNotification(message) {

    const notification = document.getElementById("notification");

    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 4000);
}


function shortenAddress(address) {

    return address.slice(0, 6) + "..." + address.slice(-4);

}


function formatDate(timestamp) {

    return new Date(Number(timestamp) * 1000).toLocaleString();

}


function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}


function getStatusClass(status) {

    return {
        0: "submitted",
        1: "review",
        2: "resolved",
        3: "rejected"
    }[Number(status)] || "submitted";

}


// 6. CONNECT METAMASK

async function connectWallet() {

    try {

        if (!window.ethereum) {
            throw new Error("MetaMask is not installed!");
        }

        if (
            !CONTRACT_ADDRESS ||
            !ethers.isAddress(CONTRACT_ADDRESS) ||
            CONTRACT_ADDRESS.includes("PASTE_")
        ) {
            throw new Error("Please enter your deployed Sepolia contract address in script.js.");
        }

        provider = new ethers.BrowserProvider(window.ethereum);

        await provider.send("eth_requestAccounts", []);

        const network = await provider.getNetwork();

        if (network.chainId !== 11155111n) {

            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: SEPOLIA_CHAIN_ID }]
            });

            provider = new ethers.BrowserProvider(window.ethereum);
        }

        signer = await provider.getSigner();

        currentAccount = await signer.getAddress();

        contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            CONTRACT_ABI,
            signer
        );

        const adminAddress = await contract.admin();

        isAdmin =
            currentAccount.toLowerCase() === adminAddress.toLowerCase();

        document.getElementById("walletInfo").textContent =
            "Connected Wallet: " + shortenAddress(currentAccount) +
            (isAdmin ? " | Administrator" : " | Normal User");

        document.getElementById("connectWallet").textContent =
            shortenAddress(currentAccount);

        document.getElementById("admin").style.display = "";

        showNotification("Wallet connected successfully!");

        await loadDashboard();
        await loadMyComplaints();

        if (isAdmin) {
            await loadAdminComplaints();
        } else {
            document.getElementById("adminMessage").textContent =
                "Access denied. Administrator wallet required.";

            document.getElementById("adminComplaints").innerHTML = "";
        }

    } catch (error) {

        console.error(error);
        showNotification(error.shortMessage || error.message);

    }

}


// 7. LOAD DASHBOARD STATISTICS

async function loadDashboard() {

    if (!contract) return;

    try {

        const total = await contract.totalComplaints();
        const pending = await contract.pendingComplaints();
        const resolved = await contract.resolvedComplaints();
        const rejected = await contract.rejectedComplaints();

        document.getElementById("totalCount").textContent = total.toString();

        document.getElementById("pendingCount").textContent =
            pending.toString();

        document.getElementById("resolvedCount").textContent =
            resolved.toString();

        document.getElementById("rejectedCount").textContent =
            rejected.toString();

    } catch (error) {

        console.error("Dashboard error:", error);
        showNotification("Unable to load dashboard statistics.");

    }

}


// 8. SUBMIT COMPLAINT

document.getElementById("complaintForm")
.addEventListener("submit", async function(event) {

    event.preventDefault();

    try {

        if (!contract) {
            throw new Error("Connect your MetaMask wallet first.");
        }

        const title =
            document.getElementById("complaintTitle").value.trim();

        const description =
            document.getElementById("complaintDescription").value.trim();

        if (!title || !description) {
            throw new Error("Please fill in all fields.");
        }

        showNotification("Please confirm transaction in MetaMask...");

        const tx = await contract.submitComplaint(
            title,
            description
        );

        showNotification("Transaction submitted. Waiting for confirmation...");

        await tx.wait();

        this.reset();

        showNotification("Complaint submitted successfully!");

        await loadDashboard();
        await loadMyComplaints();

    } catch (error) {

        console.error(error);
        showNotification(error.shortMessage || error.reason || error.message);

    }

});


// 9. LOAD MY COMPLAINTS

async function loadMyComplaints() {

    if (!contract) return;

    const container =
        document.getElementById("myComplaintsList");

    try {

        const ids = await contract.getMyComplaints();

        if (ids.length === 0) {

            container.innerHTML = "No complaints submitted yet.";
            return;

        }

        let html = "";

        for (const id of ids) {

            const c = await contract.getComplaintDetails(id);

            html += `
                <div class="complaint-item">
                    <h3>Complaint #${c[0].toString()}</h3>

                    <p><b>Title:</b> ${escapeHTML(c[1])}</p>

                    <p><b>Description:</b> ${escapeHTML(c[2])}</p>

                    <p><b>Date:</b> ${formatDate(c[3])}</p>

                    <p><b>Status:</b>
                        <span class="status ${getStatusClass(c[5])}">
                            ${STATUS[Number(c[5])]}
                        </span>
                    </p>

                    <button class="primary-btn"
                        onclick="viewHistory('${id.toString()}')">
                        View History
                    </button>
                </div>
            `;

        }

        container.innerHTML = html;

    } catch (error) {

        console.error(error);
        container.textContent = "Unable to load complaints.";

    }

}


// 10. TRACK COMPLAINT

document.getElementById("trackBtn")
.addEventListener("click", async function() {

    try {

        if (!contract) {
            throw new Error("Connect your wallet first.");
        }

        const id =
            document.getElementById("trackId").value.trim();

        if (!id || !/^[1-9]\d*$/.test(id)) {
            throw new Error("Enter a valid Complaint ID.");
        }

        const c = await contract.getComplaintDetails(id);

        document.getElementById("trackResult").innerHTML = `

            <div class="complaint-item">

                <h3>Complaint #${c[0].toString()}</h3>

                <p><b>Title:</b> ${escapeHTML(c[1])}</p>

                <p><b>Description:</b> ${escapeHTML(c[2])}</p>

                <p><b>Submitted By:</b> ${escapeHTML(c[4])}</p>

                <p><b>Submitted On:</b> ${formatDate(c[3])}</p>

                <p><b>Status:</b>
                    <span class="status ${getStatusClass(c[5])}">
                        ${STATUS[Number(c[5])]}
                    </span>
                </p>

                <button class="primary-btn"
                    onclick="viewHistory('${id}')">
                    View Status History
                </button>

            </div>
        `;

    } catch (error) {

        console.error(error);

        document.getElementById("trackResult").textContent =
            error.shortMessage || error.reason || error.message;

    }

});


// 11. VIEW COMPLAINT HISTORY

async function viewHistory(id) {

    try {

        const history = await contract.getComplaintHistory(id);

        let html = `
            <div class="content-card">
                <h3>Complaint #${id} - Status History</h3>
        `;

        history.forEach((item, index) => {

            html += `
                <div class="history-item">

                    <h4>Update ${index + 1}</h4>

                    <p><b>Status:</b> ${STATUS[Number(item.status)]}</p>

                    <p><b>Date:</b> ${formatDate(item.timestamp)}</p>

                    <p><b>Updated By:</b>
                        ${escapeHTML(item.updatedBy)}
                    </p>

                </div>
            `;

        });

        html += "</div>";

        document.getElementById("trackResult").innerHTML = html;

        showNotification("Complaint history loaded!");

    } catch (error) {

        console.error(error);
        showNotification(error.shortMessage || error.message);

    }

}


// 12. ADMIN PANEL - LOAD ALL COMPLAINTS

async function loadAdminComplaints() {

    if (!contract || !isAdmin) return;

    const container =
        document.getElementById("adminComplaints");

    try {

        const ids = await contract.getAllComplaintIds();

        document.getElementById("adminMessage").textContent =
            "Administrator access verified. Total complaints: " + ids.length;

        if (ids.length === 0) {

            container.innerHTML = "No complaints available.";
            return;

        }

        let html = "";

        for (const id of ids) {

            const c = await contract.getComplaintDetails(id);

            html += `

                <div class="complaint-item">

                    <h3>Complaint #${c[0].toString()}</h3>

                    <p><b>Title:</b> ${escapeHTML(c[1])}</p>

                    <p><b>Description:</b> ${escapeHTML(c[2])}</p>

                    <p><b>Submitted By:</b>
                        ${escapeHTML(c[4])}
                    </p>

                    <p><b>Current Status:</b>
                        ${STATUS[Number(c[5])]}
                    </p>

                    <label>Update Complaint Status</label>

                    <select id="status-${id.toString()}">

                        <option value="0">Submitted</option>
                        <option value="1">Under Review</option>
                        <option value="2">Resolved</option>
                        <option value="3">Rejected</option>

                    </select>

                    <button class="primary-btn"
                        onclick="updateStatus('${id.toString()}')">
                        Update Status
                    </button>

                </div>

            `;

        }

        container.innerHTML = html;

    } catch (error) {

        console.error(error);

        container.textContent =
            error.shortMessage || error.reason || error.message;

    }

}


// 13. ADMIN - UPDATE COMPLAINT STATUS

async function updateStatus(id) {

    try {

        if (!isAdmin) {
            throw new Error("Only administrator can update status.");
        }

        const selectedStatus =
            document.getElementById("status-" + id).value;

        showNotification("Confirm status update in MetaMask...");

        const tx = await contract.updateComplaintStatus(
            id,
            Number(selectedStatus)
        );

        showNotification("Updating complaint status...");

        await tx.wait();

        showNotification("Complaint status updated successfully!");

        await loadDashboard();
        await loadAdminComplaints();
        await loadMyComplaints();

    } catch (error) {

        console.error(error);
        showNotification(error.shortMessage || error.reason || error.message);

    }

}


// 14. WALLET ACCOUNT CHANGE

if (window.ethereum) {

    window.ethereum.on("accountsChanged", () => {
        window.location.reload();
    });

    window.ethereum.on("chainChanged", () => {
        window.location.reload();
    });

}


// 15. CONNECT BUTTON EVENT

document.getElementById("connectWallet")
.addEventListener("click", connectWallet);


// 16. INITIAL STATE

showNotification("Welcome to Grievance Portal!");


// ==========================================
// 17. SIDEBAR NAVIGATION
// ==========================================

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
const pageTitle = document.getElementById("pageTitle");

const pageTitles = {
    dashboard: "Dashboard",
    submit: "Submit Complaint",
    myComplaints: "My Complaints",
    track: "Track Complaint",
    admin: "Administrator Panel"
};

navItems.forEach(item => {

    item.addEventListener("click", async function () {

        const page = this.dataset.page;

        // Remove active class from all navigation buttons
        navItems.forEach(nav => nav.classList.remove("active"));

        // Hide all pages
        pages.forEach(section => section.classList.remove("active"));

        // Activate selected button and page
        this.classList.add("active");

        document.getElementById(page).classList.add("active");

        // Update heading
        pageTitle.textContent = pageTitles[page];

        // Load data when opening relevant pages
        if (page === "dashboard") {
            await loadDashboard();
        }

        if (page === "myComplaints") {
            await loadMyComplaints();
        }

        if (page === "admin") {
            if (isAdmin) {
                await loadAdminComplaints();
            } else {
                document.getElementById("adminMessage").textContent =
                    contract
                    ? "Access denied. Administrator wallet required."
                    : "Please connect your wallet first.";
            }
        }

    });

});

