// #region OLD SCHOOLBRIDGE
// Get first two elements of class ".table-responsive"
const summaryResultTable = document.querySelectorAll(".table-responsive");

// Set the display to none
summaryResultTable.forEach((table) => {
    table.style.display = "none";
});

// Get the summary for credits table and disable it
const summaryCreditsTable = document.querySelector(".table-sm");
summaryCreditsTable ? summaryCreditsTable.style.display = "none" : console.log("Found no .table-sm");

// Hide the pie chart
const pieChart = document.querySelector(".col-sm-7");
pieChart ? pieChart.style.display = "none" : console.log("Found no pie chart");

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
// #endregion

// #region NEW SCHOOLBRDIGE

// Hiding endorsement & credit summary tables
const endorsementsTables = document.querySelectorAll(".sk_table");
console.log(endorsementsTables);
endorsementsTables[0].style.display = "none";
endorsementsTables[1].style.display = "none";

// Hiding the NCEA summary table
const nceaSummaryTable = document.querySelector(".ncea-summary");
nceaSummaryTable.style.display = "none";
// #endregion