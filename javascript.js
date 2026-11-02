// CUSTOMER PREFERENCES FORM

document.getElementById("surveyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("surveyMessage").textContent =
        "Thank you! Your preferences have been received.";

    this.reset();
});


// CUSTOMER FEEDBACK FORM

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("feedbackMessage").textContent =
        "Thank you! Your feedback has been received.";

    this.reset();
});