const http = require("http");
const express = require("express");

let app = express();
app.server = http.createServer(app);

var port = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.server.listen(port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});
