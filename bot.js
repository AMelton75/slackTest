var ajax = require('node.ajax');
string url = "https://hooks.slack.com/services/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"
var text = "javascript test"
var i = 0;
while (i<1) {
console.log('Hello world');
ajax({
    data: 'payload=' + JSON.stringify({
        "text": text
    }),
    dataType: 'json',
    processData: false,
    type: 'POST',
    url: url
});
    i++;
}
