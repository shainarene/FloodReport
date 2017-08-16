
function VotingBooth (config) {
    /* choices: string[] of possible survey options */
    var question = config.question;
    var choices = config.choices;

    /* vote count for each choice */
    var votes = {};

    choices.forEach(function (choice) {
        votes[choice] = 0;
    });

    this.getBallotInfo = function () {
        return {
            question: question,
            choices: choices
        };
    }

    // return true if vote was successfully cast, false otherwise
    this.castVote = function (choice) {
        console.log("castVote: " + choice);
        if (votes.hasOwnProperty(choice)) {
            votes[choice]++;
            return true;
        }
        return false;
    }

    // return an object with the vote count for each choice
    this.getVoteTally = function () {
        console.log(votes);
        return {
            question: question,
            results: votes
        };
    }
}

module.exports = VotingBooth;
