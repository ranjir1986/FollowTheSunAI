const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter support ticket: ", function(ticket) {

    let category = "";
    let priority = "";
    let assignedTeam = "";
    let region = "";

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

    if (ticket.toLowerCase().includes("germany")) {
        region = "EMEA";
    }

    else if (ticket.toLowerCase().includes("japan")) {
        region = "APAC";
    }

    else if (ticket.toLowerCase().includes("usa")) {
        region = "AMER";
    }

    else {
        region = "Global";
    }

    console.log("");
    console.log("Category:", category);
    console.log("Priority:", priority);
    console.log("Assigned Team:", assignedTeam);
    console.log("Region:", region);

    rl.close();
});