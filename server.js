var express = require('express');
var app = express();
app.use(express.static("public"))
    // set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {

    res.render('index', {
        anyone: [
            { title: 'Hello', text: 'asdfdfsafa' },
            { title: 'Hello', text: 'asdfdfsafa' },
            { title: 'Hello', text: 'asdfdfsafa' },
        ],
        hello: [
            { name: "teema", age: "19", sex: "male" },
            { name: "Badmaa", age: "20", sex: "female" },
            { name: "gunj", age: "0.1", sex: "female" }
        ]
    });
});


app.listen(8080);
console.log('Server is listening on port 8080');