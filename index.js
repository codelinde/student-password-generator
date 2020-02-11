// Node dependencies
const fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

const nounList = [
    "frog",
    "toad",
    "dog",
    "cat",
    "bird",
    "hawk",
    "llama",
    "camel",
    "horse",
    "eagle",
    "goat",
    "duck",
    "goose",
    "tiger",
    "fish",
    "owl",
    "deer",
    "otter",
    "mouse",
    "turtle",
    "moose",
    "bison",
    "ant",
    "gecko",
    "hyena",
    "seal",
    "crab",
    "liger",
    "lemur",
    "koala",
    "panda",
    "lion",
    "puppy",
    "lynx",
    "pika",
    "puma",
    "quail",
    "sheep",
    "squid",
    "stoat",
    "swan",
    "wolf",
    "yak",
    "zebra",
    "corgi"
];

const adjectiveList = [
    "orange",
    "blue",
    "green",
    "purple",
    "pink",
    "gentle",
    "happy",
    "silly",
    "cool",
    "fun",
    "sleepy",
    "kind",
    "calm",
    "clever",
    "bright",
    "eager",
    "wise",
    "loyal",
    "quick",
    "witty",
    "brave",
    "polite",
    "merry",
    "zany",
    "grey",
    "cyan",
    "gold",
    "jade",
    "lilac",
    "magic",
    "mauve",
    "shiny",
    "nice",
    "jolly",
    "pretty",
    "amber",
    "ruby",
    "silver",
    "bronze"
];

//DEFINE NUMBER OF RESULTS YOU WANT TO GENERATE HERE
const resultNumber = 11500;

//Final array to store results
var finalArray = [];

// Generates a 2-digit number 
function generateNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Returns index of noun to use for concatenation
function pickNoun() {
    return generateNumber(0, nounList.length - 1);
}

// Returns index of adjective to use for concatenation
function pickAdjective() {
    return generateNumber(0, adjectiveList.length - 1);
}

// Main loop to generate results
for (var i=0; i < resultNumber; i++) {
    let twoDigitArray = [];
    // Need to keep 69 out of the mix by generating two numbers and pushing both to an array
    twoDigitArray.push(generateNumber(10, 68));
    twoDigitArray.push(generateNumber(70, 99));
    // Call functions to generate words
    let concatNoun = pickNoun();
    let concatAdj = pickAdjective();

    // Concat with either 0 or 1 index of twoDigitArray
    finalArray.push(adjectiveList[concatAdj] + nounList[concatNoun] + twoDigitArray[Math.round(Math.random())]);
}

// Convert array items into arrays
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }
      matrix[k].push(list[i]);
    }
    return matrix;
}

const finalArrayMatrix = listToMatrix(finalArray, 1);

// Convert to CSV object
const finalArrayCsv = convertArrayToCSV(finalArrayMatrix, {
    header: undefined,
    separator: ','
});

// Write CSV object to disk
fs.writeFile('csv/passwords.csv', finalArrayCsv, 'utf8', function(err) {
    if (err) {
        console.log('Error! File either not saved or saved in a corrupted form.');
    } else {
        console.log('File saved successfully!');
    }
});