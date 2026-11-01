<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Mart Global | Sales Analytics</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>

<header>
    <div class="logo">E-MART<span> GLOBAL</span></div>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#dataset">Dataset</a>
        <a href="#analysis">Analysis</a>
        <a href="#analyzer">Analyzer</a>
        <a href="#conclusion">Conclusion</a>
    </nav>
</header>

<section id="home" class="hero">
    <div class="hero-content">
        <p class="tag">INFORMATICS PRACTICES PROJECT</p>
        <h1>E-Mart Global<br><span>Sales Analysis</span></h1>
        <p>
            Discover sales patterns, understand profit
            and explore business performance through data analysis.
        </p>
        <a href="#analysis" class="main-btn">Explore Dashboard</a>
    </div>

    <div class="hero-card">
        <div class="card-icon">📊</div>
        <h3>Sales Analytics</h3>
        <p>Data-driven business insights</p>
        <div class="hero-line"></div>
        <div class="hero-line short"></div>
    </div>
</section>

<section id="about" class="section">
    <p class="tag">PROJECT OVERVIEW</p>
    <h2>About the Project</h2>
    <p class="description">
        E-Mart Global Sales Analysis is a data-analysis project
        designed to study sales and profit information of a retail
        business using Python, Pandas, Matplotlib and SQL.
    </p>

    <div class="cards">
        <div class="info-card">
            <span>🎯</span>
            <h3>Objective</h3>
            <p>Analyse sales, profit, products, categories and regions.</p>
        </div>

        <div class="info-card">
            <span>💻</span>
            <h3>Technologies</h3>
            <p>Python, Pandas, Matplotlib, SQL, HTML, CSS and JavaScript.</p>
        </div>

        <div class="info-card">
            <span>📈</span>
            <h3>Purpose</h3>
            <p>Convert sales information into useful business insights.</p>
        </div>
    </div>
</section>

<section id="dataset" class="section">
    <p class="tag">DATA INFORMATION</p>
    <h2>Dataset Overview</h2>
    <p class="description">
        The dataset is created directly inside the Python program.
        It contains information related to E-Mart Global sales.
    </p>

    <div class="dataset-grid">
        <div>Order ID</div>
        <div>Order Date</div>
        <div>Customer Name</div>
        <div>Category</div>
        <div>Product Name</div>
        <div>Region</div>
        <div>Sales</div>
        <div>Quantity</div>
        <div>Profit</div>
        <div>Payment Mode</div>
    </div>
</section>

<section id="analysis" class="section">
    <p class="tag">BUSINESS INSIGHTS</p>
    <h2>Sales Analysis</h2>
    <p class="description">
        Explore the important analysis performed using Python and Pandas.
    </p>

    <div class="cards">
        <div class="info-card">
            <span>💰</span>
            <h3>Total Sales</h3>
            <p>Calculation of total sales generated.</p>
        </div>

        <div class="info-card">
            <span>📊</span>
            <h3>Total Profit</h3>
            <p>Calculation of total profit earned.</p>
        </div>

        <div class="info-card">
            <span>🏆</span>
            <h3>Top Products</h3>
            <p>Identification of the five highest-selling products.</p>
        </div>
    </div>

    <div class="chart-box">
        <h3>Python Analysis & Visualizations</h3>
        <p>
            Insert your actual Python results and Matplotlib graphs
            in this section.
        </p>
        <div class="chart-placeholder">
            Your actual sales graphs will appear here.
        </div>
    </div>

    <div class="sql-box">
        <h3>SQL Analysis</h3>
        <p>SQL is used to retrieve and analyse sales information.</p>
        <ul>
            <li>Display all orders</li>
            <li>Find total sales and profit</li>
            <li>Find sales by category and region</li>
            <li>Identify high-selling products</li>
        </ul>
    </div>
</section>

<section id="analyzer" class="section">
    <p class="tag">INTERACTIVE TOOL</p>
    <h2>Sales & Profit Analyzer</h2>
    <p class="description">
        Enter your sales amount and cost amount to calculate profit.
    </p>

    <div class="analyzer">
        <label for="sales">Sales Amount</label>
        <input type="number" id="sales" placeholder="Enter sales amount" min="0" step="any">

        <label for="cost">Cost Amount</label>
        <input type="number" id="cost" placeholder="Enter cost amount" min="0" step="any">

        <button onclick="calculateProfit()">Calculate Profit</button>

        <div id="result">
            Your result will appear here.
        </div>
    </div>
</section>

<section id="conclusion" class="section">
    <p class="tag">FINAL SUMMARY</p>
    <h2>Conclusion</h2>
    <p class="description">
        This project demonstrates how Python, Pandas and Matplotlib
        can be used to analyse and visualize sales information.
        SQL helps retrieve useful information, while the interactive
        website presents the project in a simple and understandable way.
    </p>
</section>

<footer>
    <h3>E-MART GLOBAL</h3>
    <p>Sales Analysis | Informatics Practices Project</p>
    <p>Created using Python, HTML, CSS and JavaScript</p>
</footer>

<script src="javascript.js"></script>

</body>
</html>
/* CUSTOMER ANALYTICS CHARTS */

if (typeof Chart !== "undefined") {

    new Chart(document.getElementById("preferenceChart"), {
        type: "doughnut",
        data: {
            labels: ["Electronics", "Fashion", "Home", "Beauty"],
            datasets: [{
                data: [35, 30, 20, 15],
                backgroundColor: [
                    "#38bdf8", "#818cf8",
                    "#34d399", "#fbbf24"
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });

    new Chart(document.getElementById("frequencyChart"), {
        type: "bar",
        data: {
            labels: ["Daily", "Weekly", "Monthly", "Rarely"],
            datasets: [{
                label: "Customers",
                data: [15, 40, 30, 15],
                backgroundColor: "#38bdf8"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });

    new Chart(document.getElementById("segmentChart"), {
        type: "pie",
        data: {
            labels: ["New", "Regular", "Returning"],
            datasets: [{
                data: [30, 40, 30],
                backgroundColor: [
                    "#818cf8", "#34d399", "#fbbf24"
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });
}
// CUSTOMER INSIGHTS INTERACTION

const customerType = document.getElementById("customerType");
const insightResult = document.getElementById("insightResult");

const customerInsights = {
    regular: {
        title: "Regular Customers",
        description: "Regular customers frequently purchase products and show interest in popular categories."
    },

    new: {
        title: "New Customers",
        description: "New customers are exploring different product categories and discovering the available products."
    },

    returning: {
        title: "Returning Customers",
        description: "Returning customers have previously purchased products and may show continued interest in the store."
    }
};

if (customerType && insightResult) {
    customerType.addEventListener("change", function() {
        const selected = customerInsights[this.value];

        insightResult.innerHTML = `
            <h3>${selected.title}</h3>
            <p>${selected.description}</p>
        `;
    });
}