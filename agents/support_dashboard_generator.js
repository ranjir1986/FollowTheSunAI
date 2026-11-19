const tickets = [
    "Customer cannot login",
    "VPN issue from Germany office",
    "Email not working",
    "VPN connection failed",
    "Cannot login to portal",
    "VPN issue from Japan office"
];

let authenticationCount = 0;
let networkCount = 0;
let messagingCount = 0;

for (let ticket of tickets) {

    if (ticket.toLowerCase().includes("login")) {
        authenticationCount++;
    }

    else if (ticket.toLowerCase().includes("vpn")) {
        networkCount++;
    }

    else if (ticket.toLowerCase().includes("email")) {
        messagingCount++;
    }
}

console.log("");
console.log("========== SUPPORT OPERATIONS DASHBOARD ==========");
console.log("");

console.log("Authentication Tickets:", authenticationCount);
console.log("Network Tickets:", networkCount);
console.log("Messaging Tickets:", messagingCount);

console.log("");

let topCategory = "";

if (
    authenticationCount > networkCount &&
    authenticationCount > messagingCount
) {
    topCategory = "Authentication";
}

else if (
    networkCount > authenticationCount &&
    networkCount > messagingCount
) {
    topCategory = "Network";
}

else {
    topCategory = "Messaging";
}

console.log("Top Issue Category:", topCategory);
console.log("");