//express
var express = require('express');
//create our app
var app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Map server listening on port ' + PORT);
});