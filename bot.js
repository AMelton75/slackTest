//AUSTIN - add node-XMLHttpRequest using npm install node-XMLHttpRequest
//add this afterwards:
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhttp = new XMLHttpRequest();


var xhttp = new XMLHttpRequest();
var url = "https://hooks.slack.com/services/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";
var text = "javascript test"
var i = 0;
while (i<1) {
console.log('Hello world');
xhttp.open("POST", url, true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(JSON.stringify({text: text}));
    i++;
}
