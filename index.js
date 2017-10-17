<<<<<<< HEAD
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var VotingBooth = require('./VotingBooth');

var votingBoothConfig = {
    question: "What type of flood occurred the most between 2000 and 2009?",
    choices: ["Class 1", "Class 1.5", "Class 2"]
};

var survey = new VotingBooth(votingBoothConfig);

app.use('/', express.static('public'));

app.get('/tally', function (req, res) {
    var result = survey.getVoteTally();

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result))
})

app.get('/ballot', function (req, res) {
    var ballotInfo = survey.getBallotInfo();

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(ballotInfo));
})

app.post('/ballot/:choice', function (req, res) {
    var choice = req.params.choice;
    var success = survey.castVote(choice);

    if (success !== true) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({error: "Unable to cast vote"}));
        return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({message: "Cast vote for " + choice}));
});

app.listen(port);
=======
const http = require("http");
const express = require("express");
var FloodData = require('./flood-data');
var FloodEvent = require('./flood-event');
var FloodStatsGenerator = require('./flood-stats');

var dataService = new FloodData();
var data = dataService.loadFromFile('./data/floods.xls');
var floodEvents = data.map(function(flood) {
    return new FloodEvent(flood);
 });
//console.log(floodEvents[0].printFull());
//console.log(floodEvents[1].printFull());
console.log(floodEvents.length);

var floodStatsGenerator = new FloodStatsGenerator(floodEvents);
var yearCounts = floodStatsGenerator.getYearlyFloodCounts();
console.log(yearCounts);

let app = express();
app.server = http.createServer(app);

var port = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.server.listen(port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});
>>>>>>> 3eabfb66d5aecc78a3594173816e92c1b3bb4fd2
