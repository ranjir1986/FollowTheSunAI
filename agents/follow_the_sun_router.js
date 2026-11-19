function routeTicket(ticket) {
    let assignedCenter = "Global Queue";

    if (ticket.region === "APAC") {
        assignedCenter = "Bangalore";
    } else if (ticket.region === "EMEA") {
        assignedCenter = "Israel";
    } else if (ticket.region === "AMER") {
        assignedCenter = "New York";
    }

    return {
        ticketId: ticket.ticketId || "NEW-001",
        assignedCenter: assignedCenter
    };
}

module.exports = routeTicket;