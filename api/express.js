const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const users = [];

app.use(bodyParser.json());

app.get('/users?', (req, res) => {
    let { usersPerPage } = req.query;
    const { pageNumber } = req.query;

    usersPerPage = Math.max(1, usersPerPage);

    const firstSemafor = usersPerPage * pageNumber;
    const secondSemafor = usersPerPage + (usersPerPage * pageNumber);

    res.send(users.slice(firstSemafor, secondSemafor).map((x) => {
        return {
            name: x.name,
            surname: x.surname,
            age: x.age,
        };
    }));
});

app.get('/usersCounter', (req, res) => {
    res.send(JSON.stringify(users.length));
})

app.post('/addUser', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.send(users.slice(0, 5).map((x) => {
        return {
            name: x.name,
            surname: x.surname,
            age: x.age,
        };
    }));
});

app.listen(3000);