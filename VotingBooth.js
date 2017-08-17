
class VotingBooth {

    // initialize this VotingBooth
    constructor(config) {
        // the question being asked
        this.question = config.question;
        // array of possible survey options
        this.choices = config.choices;

        // vote count for each choice
        this.votes = {};

        this.choices.forEach( (choice) => {
            this.votes[choice] = 0;
        });
    }

    // return an object with info about the question and choices
    getBallotInfo () {
        return {
            question: this.question,
            choices: this.choices
        };
    }

    // return true if vote was successfully cast, false otherwise
    castVote (choice) {
        console.log("castVote: " + choice);
        if (this.votes.hasOwnProperty(choice)) {
            this.votes[choice]++;
            return true;
        }
        return false;
    }

    // return an object with the vote count for each choice
    getVoteTally () {
        console.log(this.votes);
        return {
            question: this.question,
            results: this.votes
        };
    }
}

module.exports = VotingBooth;
