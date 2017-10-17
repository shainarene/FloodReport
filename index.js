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
