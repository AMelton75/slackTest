var ajax = require('node.ajax');

var text = "javascript test"
var i = 0;
while (i<1) {
console.log('Hello world');
ajax({
    url: "https://hooks.slack.com/services/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",
    type: 'POST',
    dataType: 'json',
    success: function (data) {
                console.log("hello");
            },
    data: 'payload=' + JSON.stringify({
        "text": text
    })
    
    //processData: false,
});
    i++;
}
