// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

// Define dimensions of the chart area
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("chart")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from data.csv
d3.csv("data.csv").then(function(lifestyleData) {


    // Step 1: Parse Data/Cast as numbers
    // ==============================
    lifestyleData.forEach(function(data) {
        data.hair_length = +data.hair_length;
        data.num_hits = +data.num_hits;
      });
  // Print the tvData
  //console.log(tvData);

  // Cast the hours value to a number for each piece of tvData
  //tvData.forEach(function(data) {
    //data.hours = +data.hours;
  //});
