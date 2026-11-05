// E-MART SALES DATA

const salesData = [
    { invoice: 101, customer: "VIP", category: "Electronics", price: 45000, quantity: 1, date: "2026-01-10", total: 45000 },
    { invoice: 102, customer: "Regular", category: "Clothing", price: 1200, quantity: 3, date: "2026-01-11", total: 3600 },
    { invoice: 103, customer: "New", category: "Home Decor", price: 3500, quantity: 2, date: "2026-01-11", total: 7000 },
    { invoice: 104, customer: "VIP", category: "Electronics", price: 12000, quantity: 2, date: "2026-01-12", total: 24000 },
    { invoice: 105, customer: "Regular", category: "Books", price: 450, quantity: 5, date: "2026-01-14", total: 2250 },
    { invoice: 106, customer: "New", category: "Clothing", price: 2500, quantity: 1, date: "2026-01-15", total: 2500 },
    { invoice: 107, customer: "VIP", category: "Home Decor", price: 8000, quantity: 1, date: "2026-01-16", total: 8000 },
    { invoice: 108, customer: "Regular", category: "Electronics", price: 800, quantity: 4, date: "2026-01-16", total: 3200 },
    { invoice: 109, customer: "New", category: "Books", price: 300, quantity: 2, date: "2026-01-18", total: 600 },
    { invoice: 110, customer: "VIP", category: "Clothing", price: 5000, quantity: 2, date: "2026-01-19", total: 10000 }
];

const money = value =>
    "₹" + Number(value).toLocaleString("en-IN");


// CALCULATE DASHBOARD TOTALS

const totalRevenue = salesData.reduce((sum, sale) => sum + sale.total, 0);
const totalUnits = salesData.reduce((sum, sale) => sum + sale.quantity, 0);

document.getElementById("totalRevenue").textContent = money(totalRevenue);
document.getElementById("totalOrders").textContent = salesData.length;
document.getElementById("totalUnits").textContent = totalUnits;

const categories = [...new Set(salesData.map(sale => sale.category))];

document.getElementById("totalCategories").textContent = categories.length;


// CATEGORY SALES

const categoryTotals = {};

salesData.forEach(sale => {
    categoryTotals[sale.category] =
        (categoryTotals[sale.category] || 0) + sale.total;
});


// CUSTOMER DISTRIBUTION

const customerTotals = {
    VIP: 0,
    Regular: 0,
    New: 0
};

salesData.forEach(sale => {
    customerTotals[sale.customer]++;
});


// DAILY SALES

const dailyTotals = {};

salesData.forEach(sale => {
    dailyTotals[sale.date] =
        (dailyTotals[sale.date] || 0) + sale.total;
});


// CATEGORY CHART

new Chart(document.getElementById("categoryChart"), {
    type: "bar",
    data: {
        labels: Object.keys(categoryTotals),
        datasets: [{
            label: "Sales (₹)",
            data: Object.values(categoryTotals),
            backgroundColor: ["#638fff", "#9274ed", "#36b8d8", "#e5a45c"],
            borderRadius: 7
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: "#dce5f7" }
            }
        },
        scales: {
            x: {
                ticks: { color: "#b7c4dc" },
                grid: { display: false }
            },
            y: {
                ticks: { color: "#b7c4dc" },
                grid: { color: "#26334c" }
            }
        }
    }
});


// CUSTOMER CHART

new Chart(document.getElementById("customerChart"), {
    type: "doughnut",
    data: {
        labels: Object.keys(customerTotals),
        datasets: [{
            data: Object.values(customerTotals),
            backgroundColor: ["#638fff", "#9274ed", "#36b8d8"],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels: { color: "#dce5f7" }
            }
        }
    }
});


// DAILY SALES CHART

new Chart(document.getElementById("dailyChart"), {
    type: "line",
    data: {
        labels: Object.keys(dailyTotals),
        datasets: [{
            label: "Daily Revenue (₹)",
            data: Object.values(dailyTotals),
            borderColor: "#719aff",
            backgroundColor: "rgba(113,154,255,0.15)",
            fill: true,
            tension: 0.35
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: "#dce5f7" }
            }
        },
        scales: {
            x: {
                ticks: { color: "#b7c4dc" },
                grid: { display: false }
            },
            y: {
                ticks: { color: "#b7c4dc" },
                grid: { color: "#26334c" }
            }
        }
    }
});


// 1. SALES ANALYZER

function analyzeCategory() {
    const selected = document.getElementById("categorySelect").value;

    const filtered = selected === "All"
        ? salesData
        : salesData.filter(sale => sale.category === selected);

    const revenue = filtered.reduce((sum, sale) => sum + sale.total, 0);

    document.getElementById("categoryResult").textContent =
        `${filtered.length} orders | Total sales: ${money(revenue)}`;
}


// 2. REVENUE CALCULATOR

function calculateRevenue() {
    const price = Number(document.getElementById("priceInput").value);
    const quantity = Number(document.getElementById("quantityInput").value);

    if (price <= 0 || quantity <= 0 ||
        document.getElementById("priceInput").value === "" ||
        document.getElementById("quantityInput").value === "") {
        document.getElementById("revenueResult").textContent =
            "Please enter a valid price and quantity.";
        return;
    }

    document.getElementById("revenueResult").textContent =
        "Calculated Revenue: " + money(price * quantity);
}


// 3. CUSTOMER ANALYZER

function analyzeCustomer() {
    const selected = document.getElementById("customerSelect").value;

    const filtered = selected === "All"
        ? salesData
        : salesData.filter(sale => sale.customer === selected);

    const revenue = filtered.reduce((sum, sale) => sum + sale.total, 0);

    document.getElementById("customerResult").textContent =
        `${filtered.length} orders | Total purchases: ${money(revenue)}`;
}


// 4. DATE FILTER

function filterByDate() {
    const selectedDate = document.getElementById("dateInput").value;

    if (!selectedDate) {
        document.getElementById("dateResult").textContent =
            "Please select a date.";
        return;
    }

    const filtered = salesData.filter(sale => sale.date === selectedDate);

    const revenue = filtered.reduce((sum, sale) => sum + sale.total, 0);

    document.getElementById("dateResult").textContent =
        `${filtered.length} orders | Sales: ${money(revenue)}`;
}


// 5. CUSTOMER PREFERENCE SURVEY

const surveyForm = document.getElementById("surveyForm");
const opinionsList = document.getElementById("opinionsList");

let surveyResponses = [];

try {
    surveyResponses = JSON.parse(
        localStorage.getItem("emartSurveyResponses")
    ) || [];
} catch (error) {
    surveyResponses = [];
}

let surveyChart;


// DISPLAY SURVEY RESULTS

function updateSurveyChart() {
    const preferenceCounts = {
        Electronics: 0,
        Clothing: 0,
        "Home Decor": 0,
        Books: 0
    };

    surveyResponses.forEach(response => {
        preferenceCounts[response.category]++;
    });

    if (surveyChart) {
        surveyChart.destroy();
    }

    surveyChart = new Chart(document.getElementById("surveyChart"), {
        type: "bar",
        data: {
            labels: Object.keys(preferenceCounts),
            datasets: [{
                label: "Customer Preferences",
                data: Object.values(preferenceCounts),
                backgroundColor: ["#638fff", "#9274ed", "#36b8d8", "#e5a45c"],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: "#dce5f7" }
                }
            },
            scales: {
                x: {
                    ticks: { color: "#b7c4dc" },
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#b7c4dc",
                        precision: 0
                    },
                    grid: { color: "#26334c" }
                }
            }
        }
    });

    document.getElementById("surveyCount").textContent =
        "Responses: " + surveyResponses.length;
}


// DISPLAY CUSTOMER OPINIONS

function displayOpinions() {
    opinionsList.replaceChildren();

    if (surveyResponses.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No feedback submitted yet.";
        opinionsList.appendChild(message);
        return;
    }

    surveyResponses.forEach(response => {
        const item = document.createElement("div");
        item.className = "opinion-item";

        const heading = document.createElement("strong");
        heading.textContent =
            `${response.customer} | ${response.category}`;

        const details = document.createElement("p");
        details.textContent =
            `Payment: ${response.payment} | Frequency: ${response.frequency} | Rating: ${response.rating}/5`;

        const opinion = document.createElement("p");
        opinion.textContent = response.opinion;

        item.append(heading, details, opinion);
        opinionsList.appendChild(item);
    });
}


// SUBMIT SURVEY

surveyForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const response = {
        customer: document.getElementById("surveyCustomer").value,
        category: document.getElementById("surveyCategory").value,
        payment: document.getElementById("surveyPayment").value,
        frequency: document.getElementById("surveyFrequency").value,
        rating: document.getElementById("surveyRating").value,
        opinion: document.getElementById("surveyOpinion").value.trim()
    };

    if (!response.opinion) {
        document.getElementById("surveyMessage").textContent =
            "Please enter your opinion.";
        return;
    }

    surveyResponses.push(response);

    try {
        localStorage.setItem(
            "emartSurveyResponses",
            JSON.stringify(surveyResponses)
        );
    } catch (error) {
        document.getElementById("surveyMessage").textContent =
            "Your browser could not save this response.";
        return;
    }

    document.getElementById("surveyMessage").textContent =
        "Thank you! Your feedback has been received.";

    surveyForm.reset();

    updateSurveyChart();
    displayOpinions();
});


// LOAD SAVED SURVEY RESULTS

updateSurveyChart();
displayOpinions();