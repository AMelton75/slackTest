var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "https://hooks.slack.com/services/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";
var joshP = "<@U8REZ2U3U>";
var rohan = "<@U0KFF3WDS>";
var austin = "<@U7529SGN4>";

function Send(var json) {
let xhttp = new XMLHttpRequest();
xhttp.open("POST", url, true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(json);
}

Send(
{
  "attachments": [
  {
  "title": rohan + ":" + austin + " has a quest for you",
  "text": "_You Must Find_ *A Shrubbery!*",
  "text": "One that is nice but not too expensive"
  },
    {
      "text": "Then you must chop down a tree with a _herring_!"
    }
  ]
}
);
while (true) {
}
