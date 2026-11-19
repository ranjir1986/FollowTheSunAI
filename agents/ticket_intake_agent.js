const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter support ticket: ", function(ticket) {

let category = "";
let priority = "";
let assignedTeam = "";

if (ticket.toLowerCase().includes("login")) {
    category = "Authentication";
    priority = "P2";
    assignedTeam = "Identity Services";
}

else if (ticket.toLowerCase().includes("vpn")) {
    category = "Network";
    priority = "P2";
    assignedTeam = "Network Operations";
}

else if (ticket.toLowerCase().includes("email")) {
    category = "Messaging";
    priority = "P3";
    assignedTeam = "Email Services";
}

console.log(`Category: ${category}`);
console.log(`Priority: ${priority}`);
console.log(`Assigned Team: ${assignedTeam}`);

console.log("TEST RUN");
rl.close();
});