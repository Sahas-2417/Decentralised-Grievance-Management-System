
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ComplaintManagement {

    // Administrator address
    address public admin;

    // Complaint status
    enum Status {
        Submitted,
        UnderReview,
        Resolved,
        Rejected
    }

    // Complaint details
    struct Complaint {
        uint256 complaintId;
        string title;
        string description;
        uint256 timestamp;
        address submittedBy;
        Status status;
    }

    // Status history
    struct StatusUpdate {
        Status status;
        uint256 timestamp;
        address updatedBy;
    }

    // Complaint ID counter
    uint256 public complaintCounter;

    // Store complaints
    mapping(uint256 => Complaint) public complaints;

    // Store complaint IDs submitted by each user
    mapping(address => uint256[]) private userComplaints;

    // Store complaint status history
    mapping(uint256 => StatusUpdate[]) private complaintHistory;

    // Dashboard statistics
    uint256 public totalComplaints;
    uint256 public pendingComplaints;
    uint256 public resolvedComplaints;
    uint256 public rejectedComplaints;

    // Events
    event ComplaintSubmitted(
        uint256 indexed complaintId,
        address indexed submittedBy,
        string title
    );

    event ComplaintStatusUpdated(
        uint256 indexed complaintId,
        Status newStatus,
        address indexed updatedBy
    );

    // Admin access control
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    // Constructor
    constructor() {
        admin = msg.sender;
    }

    // Submit a new complaint
    function submitComplaint(
        string memory _title,
        string memory _description
    ) public {

        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");

        complaintCounter++;

        uint256 newId = complaintCounter;

        complaints[newId] = Complaint({
            complaintId: newId,
            title: _title,
            description: _description,
            timestamp: block.timestamp,
            submittedBy: msg.sender,
            status: Status.Submitted
        });

        userComplaints[msg.sender].push(newId);

        complaintHistory[newId].push(
            StatusUpdate({
                status: Status.Submitted,
                timestamp: block.timestamp,
                updatedBy: msg.sender
            })
        );

        totalComplaints++;
        pendingComplaints++;

        emit ComplaintSubmitted(newId, msg.sender, _title);
    }

    // Update complaint status (Admin only)
    function updateComplaintStatus(
        uint256 _complaintId,
        Status _newStatus
    ) public onlyAdmin {

        require(
            _complaintId > 0 && _complaintId <= complaintCounter,
            "Invalid complaint ID"
        );

        Status oldStatus = complaints[_complaintId].status;

        require(oldStatus != _newStatus, "Status is already set");

        // Remove old status from dashboard count
        if (
            oldStatus == Status.Submitted ||
            oldStatus == Status.UnderReview
        ) {
            pendingComplaints--;
        } 
        else if (oldStatus == Status.Resolved) {
            resolvedComplaints--;
        } 
        else if (oldStatus == Status.Rejected) {
            rejectedComplaints--;
        }

        // Add new status to dashboard count
        if (
            _newStatus == Status.Submitted ||
            _newStatus == Status.UnderReview
        ) {
            pendingComplaints++;
        } 
        else if (_newStatus == Status.Resolved) {
            resolvedComplaints++;
        } 
        else if (_newStatus == Status.Rejected) {
            rejectedComplaints++;
        }

        complaints[_complaintId].status = _newStatus;

        // Record status history
        complaintHistory[_complaintId].push(
            StatusUpdate({
                status: _newStatus,
                timestamp: block.timestamp,
                updatedBy: msg.sender
            })
        );

        emit ComplaintStatusUpdated(
            _complaintId,
            _newStatus,
            msg.sender
        );
    }

    // Get complaint details
    function getComplaintDetails(
        uint256 _complaintId
    ) public view returns (
        uint256,
        string memory,
        string memory,
        uint256,
        address,
        Status
    ) {

        require(
            _complaintId > 0 && _complaintId <= complaintCounter,
            "Complaint does not exist"
        );

        Complaint memory c = complaints[_complaintId];

        return (
            c.complaintId,
            c.title,
            c.description,
            c.timestamp,
            c.submittedBy,
            c.status
        );
    }

    // Get complaints submitted by connected wallet
    function getMyComplaints()
        public
        view
        returns (uint256[] memory)
    {
        return userComplaints[msg.sender];
    }

    // Get complete status history
    function getComplaintHistory(
        uint256 _complaintId
    ) public view returns (StatusUpdate[] memory) {

        require(
            _complaintId > 0 && _complaintId <= complaintCounter,
            "Complaint does not exist"
        );

        return complaintHistory[_complaintId];
    }

    // Get all complaint IDs (Admin only)
    function getAllComplaintIds()
        public
        view
        onlyAdmin
        returns (uint256[] memory)
    {
        uint256[] memory ids = new uint256[](complaintCounter);

        for (uint256 i = 0; i < complaintCounter; i++) {
            ids[i] = i + 1;
        }

        return ids;
    }

    // Dashboard statistics
    function getDashboardStats()
        public
        view
        onlyAdmin
        returns (
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            totalComplaints,
            pendingComplaints,
            resolvedComplaints,
            rejectedComplaints
        );
    }
}
