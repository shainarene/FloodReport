const CsvParser = require("./csv-parser");

exports.csvToArray = function(csv) {
    var parser = new CsvParser();
    return parser.toArray(csv);
}

exports.stringToDate = function(dateString, format) {
    var delimiter = format.match(/\W/g)[0];
    var formatLowerCase = format.toLowerCase();
    var formatItems = formatLowerCase.split(delimiter);
    var dateItems = dateString.split(delimiter);
    var monthIndex = formatItems.indexOf("mmm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yy");
    var month = getMonthFromDateByString(dateItems[monthIndex]);
    var year = getYearFromString(dateItems[yearIndex]);
    var formatedDate = new Date(year,month,dateItems[dayIndex]);
    return formatedDate;
}

function getMonthFromDateByString(mon) {
    return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1;    
}

function getMonthFromString(mon){
    switch(mon.toLowerCase()){
        case "jan": return 1;
        case "feb": return 2;
        case "mar": return 3;
        case "apr": return 4;
        case "may": return 5;
        case "jun": return 6;
        case "jul": return 7;
        case "aug": return 8;
        case "sep": return 9;
        case "oct": return 10;
        case "nov": return 11;
        case "dec": return 12;
        default: return -1;
    }
 }

 function getYearFromString(yr) {
    var yrInt = parseInt(yr);
    if(yrInt > 80)
        return 1900+yrInt;
    return 2000+yrInt;
 }