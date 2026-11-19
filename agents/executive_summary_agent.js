function generateSummary(metrics) {

    return `
Weekly Support Summary

Total Tickets: ${metrics.tickets}

Escalations: ${metrics.escalations}

Customer Satisfaction: ${metrics.csat}%

Recommendation:
Increase staffing in high-volume regions.
`;
}

module.exports = generateSummary;