var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
var url = "https://hooks.slack.com/services/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";
var joshP = "<@U8REZ2U3U>";
var rohan = "<@U0KFF3WDS>";
var austin = "<@U7529SGN4>";
var i = 0;
var j;
var json = JSON.stringify(
{
  "attachments": [
  {
  "pretext": joshP + " has the big gay",
  "title": rohan + ":" + austin + " has a quest for you",
  "text": "_You_",
    "attachments": [
    {
    "text": "_Must Find_"
      "attachments": [
      {
      "text": "*A Shrubbery!*"
      }
      ]
    }
    ]
  }
  ],
  "text": "One that is nice but not too expensive"
}
);
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
