var ajax = require('node.ajax');
var url = String("https://hooks.slack.com/services/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");
var text = "javascript test"
var i = 0;
while (i<1) {
console.log('Hello world');
ajax({
    url: url,
    type: 'POST',
    dataType: 'json',
    data: 'payload=' + JSON.stringify({
        "text": text
    })
    
    //processData: false,
});
    i++;
}
