var express = require('express');
var gpio = require('onoff').Gpio;
var app = express();
var led = new gpio(4, 'out');
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.get('/set/', function (req, res) {
    console.log(req.query);
    var ledval = req.query.state == 'On' ? 1 : 0;
    led.writeSync(ledval);
    res.send(`received ${req.query['state']}`);
});
app.listen(8000, function() {
    console.log('server started');
})