var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
var url = "https://hooks.slack.com/services/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";
var text = "<@U8REZ2U3U>"
var i = 0;
var j;
var json = JSON.stringify({
                          "text": text,
                          "text": "*bold* `code` _italic_ ~strike~"
                          });
if (i == 0) {
    for (j = 0; j < 1; j++) {
        console.log('Hello world');
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(json);
        xhttp = new XMLHttpRequest();
    }
    i++;
}
