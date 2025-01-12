// Get first two elements of class ".table-responsive"
const summaryResultTable = document.querySelectorAll(".table-responsive");

// Set the display to none
summaryResultTable.forEach((table) => {
    table.style.display = "none";
});

// Get the summary for credits table and disable it
const summaryCreditsTable = document.querySelector(".table-sm");
summaryCreditsTable.style.display = "none";

// Hide the pie chart
const pieChart = document.querySelector(".col-sm-7");
pieChart.style.display = "none";

// Store all the result values
const resultValues = Array.from(document.querySelectorAll(".result-value"));

// Hide them
resultValues.forEach((result) => {
    result.style.display = "none";
});

// Counter for the result values
let counter = 0;

// Check if "s" key is pressed
window.addEventListener("keypress", (key) => {
    if (key.code === "KeyS") {
        resultValues[counter].style.display = "flex";
        counter++;
    }
});