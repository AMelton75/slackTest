var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
var url = "https://hooks.slack.com/services/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";
var text = "<@U8REZ2U3U>"
var i = 0;
var j;
if (i == 0) {
    for (j = 0; j < 10; j++) {
        setTimeout(function(){ 
            console.log('Hello world');
            xhttp.open("POST", url, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify({text: text}));
            xhttp = new XMLHttpRequest();
        }, 5000);
    }
    i++;
}
