//express
var express = require('express');
//create our app
var app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello Express!');
    }
);

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
    }
);