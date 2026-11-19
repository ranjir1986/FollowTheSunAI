function estimateStaffing(ticketVolume) {

    const ticketsPerAgent = 50;

    const agentsRequired =
        Math.ceil(ticketVolume / ticketsPerAgent);

    return {
        ticketVolume,
        agentsRequired
    };
}

module.exports = estimateStaffing;