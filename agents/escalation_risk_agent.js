function calculateRisk(ticket) {
    let escalationRisk = "NORMAL";

    if (ticket.priority === "P1" && ticket.customerTier === "Enterprise") {
        escalationRisk = "CRITICAL";
    } else if (ticket.priority === "P1") {
        escalationRisk = "HIGH";
    }
    
    return escalationRisk;
}

module.exports = calculateRisk;