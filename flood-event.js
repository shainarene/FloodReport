const CsvParser = require("./csv-parser");

class FloodEvent {
    
    constructor(row) {
        this.registerNumber = row[0];
        this.country = row[3];
        this.locations = this.parseLocations(row[7]);
        this.beginDate = row[9];
        this.endDate = row[10];
        this.durationInDays = row[11];
        this.numberOfDeaths = row[12];
        this.numberDisplaced = row[13];
        this.mainCause = row[15];
        this.severity = row[16];
        this.affectedArea = row[17];
        this.magnitude = row[18];
        this.centroidX = row[19];
        this.centroidY = row[20];
    }

    parseLocations(csvLocations) {
        var parser = new CsvParser();
        return parser.toArray(csvLocations);
    }

    printFull() {
        console.log("Register #: " + this.registerNumber);
        console.log("Country: " + this.country);
        console.log("Locations: " + this.locations);
        console.log("Begin Date: " + this.beginDate);
        console.log("End Date: " + this.endDate);
        console.log("Duration (days): " + this.durationInDays);
        console.log("Deaths: " + this.numberOfDeaths);
        console.log("Number displaced: " + this.numberDisplaced);
        console.log("Main Cause: " + this.mainCause);
        console.log("Severity: " + this.severity);
        console.log("Magnitude: " + this.magnitude);
        console.log("Centroid: ( " + this.centroidX + ", " + this.centroidY + " )");
    }
}

module.exports = FloodEvent;