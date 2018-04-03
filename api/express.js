var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

let users = [];

function divideUsers(arr, elemsPerPage, currentPage) {
    return arr.slice(elemsPerPage * currentPage, elemsPerPage * (currentPage + 1));
}

app.use(express.static(__dirname + './../src/index.html'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/getUsers', function (req, res) {
    const currentPage = parseInt(req.param('page'));
    const elemsPerPage = +req.param('elems');
    const filteredUsers = divideUsers(users, elemsPerPage, currentPage - 1);
    res.send(filteredUsers);
    console.log(currentPage)
});

app.get('/usersCount', function (req, res) {
    const numOfUsers = Math.max(0, users.length);
    res.send(JSON.stringify(numOfUsers));
});

app.post('/user', function (req, res) {
    users.push(req.body);
    res.send('User added to DB');
});

app.listen(3000);