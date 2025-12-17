var services = [
    { name: "Basic Website", price: 500 },
    { name: "Premium Website", price: 1200 },
    { name: "Web Application", price: 2500 },
    { name: "IT Consulting", price: 150 },
    { name: "Monthly Support", price: 300 }
];

function showTable() {
    var div = document.getElementById("priceTable");
    var tableHTML = "<table><tr><th>Service Name</th><th>Price (USD)</th></tr>";
    
    for (var i = 0; i < services.length; i++) {
        tableHTML = tableHTML + "<tr>";
        tableHTML = tableHTML + "<td>" + services[i].name + "</td>";
        tableHTML = tableHTML + "<td>$" + services[i].price + "</td>";
        tableHTML = tableHTML + "</tr>";
    }
    
    tableHTML = tableHTML + "</table>";
    div.innerHTML = tableHTML;
}

function doCalculation() {
    var priceValue = document.getElementById("priceBox").value;
    var qtyValue = document.getElementById("qtyBox").value;
    var resultDiv = document.getElementById("resultBox");
    
    if (priceValue == "" || qtyValue == "") {
        resultDiv.innerHTML = "Please enter both price and quantity!";
        return;
    }
    
    var priceNum = parseFloat(priceValue);
    var qtyNum = parseFloat(qtyValue);
    
    if (isNaN(priceNum) || isNaN(qtyNum)) {
        resultDiv.innerHTML = "Please enter valid numbers!";
        return;
    }
    
    var total = priceNum * qtyNum;
    
    resultDiv.innerHTML = "Total: $" + total.toFixed(2);
}

window.onload = function() {
    showTable();
};

