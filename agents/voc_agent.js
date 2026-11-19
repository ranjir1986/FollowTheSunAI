function analyzeFeedback(feedback) {

    if (feedback.includes("slow")) {
        return "Response Time Issue";
    }

    if (feedback.includes("bug")) {
        return "Product Quality Issue";
    }

    return "General Feedback";
}

module.exports = analyzeFeedback;