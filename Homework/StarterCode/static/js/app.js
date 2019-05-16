// from data.js
var tableData = data;


var submit = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");


var dropDownField = d3.select("#dataSet");

dropDownField.on("click", function () {
    currentSel = d3.event.target.value;
    
    console.log("change-current dropdown selection is : " + currentSel);
});


var tbody = d3.select("tbody");

tableData.forEach(function(UFOReport) {
    var row = tbody.append("tr");
    Object.values(UFOReport).forEach(function(value) {
        var cell = tbody.append("td");
        cell.attr("class", "text-center");
        cell.text(value);
    });
});

clear.on("click", function () {
    d3.event.preventDefault();

    var row = d3.select("tbody").selectAll("td");
    row.remove();

    tableData.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.values(UFOReport).forEach(function (value) {
            var cell = tbody.append("td");
            cell.attr("class", "text-center");
            cell.text(value);
        });
    });
});

submit.on("click", function () {
    d3.event.preventDefault();

    var row = d3.select("tbody").selectAll("td");
    row.remove();

    var inputElement = d3.select("#input");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(report => report[currentSel] === inputValue);

    if (inputValue === "") {
        tableData.forEach(function (UFOReport) {
            var row = tbody.append("tr");
            Object.values(UFOReport).forEach(function (value) {
                var cell = tbody.append("td");
                cell.attr("class", "text-center");
                cell.text(value);
            });
        });
    }

    else {
        filteredData.forEach(function (UFOReport) {
            console.log(UFOReport);
            var row = tbody.append("tr");
            Object.values(UFOReport).forEach(function (value) {
                var cell = tbody.append("td"); 
                cell.attr("class", "text-center");
                cell.text(value);
            });
        });
    }
});
