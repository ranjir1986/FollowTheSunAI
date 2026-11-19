const tickets = require("./data/tickets.json");

const routeTicket =
    require("./agents/follow_the_sun_router");

console.log("=================================");
console.log("FOLLOW THE SUN AI PLATFORM");
console.log("=================================\n");

tickets.forEach(ticket => {

    const routingResult =
        routeTicket(ticket);

    console.log(`Ticket: ${ticket.ticketId}`);
    console.log(`Issue: ${ticket.title}`);
    console.log(`Priority: ${ticket.priority}`);
    console.log(`Region: ${ticket.region}`);

    console.log(
        `Assigned Center: ${routingResult.assignedCenter}`
    );

    let escalationRisk = "NORMAL";

    if (
        ticket.priority === "P1" &&
        ticket.customerTier === "Enterprise"
    ) {
        escalationRisk = "CRITICAL";
    }
    else if (ticket.priority === "P1") {
        escalationRisk = "HIGH";
    }

    console.log(`Escalation Risk: ${escalationRisk}`);

    console.log("---------------------------------\n");

});
