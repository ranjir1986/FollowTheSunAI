function estimateStaffing(ticketVolume) {
    // In a real world scenario, 1 agent handles many tickets. 
    // For this demo, let's say 1 agent handles 1 ticket.
    const ticketsPerAgent = 1; 
    const agentsRequired = Math.ceil(ticketVolume / ticketsPerAgent);

    return {
        ticketVolume,
        agentsRequired
    };
}

module.exports = estimateStaffing;