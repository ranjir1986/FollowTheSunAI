function generateSummary(metrics) {
    return `
==================================================
           WEEKLY EXECUTIVE SUMMARY
==================================================
Total Tickets Processed : ${metrics.totalTickets}
Critical Escalations    : ${metrics.escalations}
Simulated CSAT          : ${metrics.csat}%
--------------------------------------------------
Workforce Recommendation:
We have ${metrics.totalTickets} tickets. 
You need ${metrics.agentsRequired} support agents on shift.
==================================================
`;
}

module.exports = generateSummary;