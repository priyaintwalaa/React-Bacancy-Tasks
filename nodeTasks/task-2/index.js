const fs = require("fs");
const argrument = process.argv;

const readFile = fs.readFileSync("Train_details.csv", "utf8");
const data = readFile.split("\n").slice(1);

//initialization
const trainData = data.map((e) => {
  const [
    trainNo,
    trainName,
    SEQ,
    stationCode,
    stationName,
    arrivalTime,
    departureTime,
    distance,
    sourceStationCode,
    sourceStationName,
    destinationStationCode,
    destinationStationName,
  ] = e.split(",");
  return {
    trainNo,
    trainName,
    SEQ,
    stationCode,
    stationName,
    arrivalTime,
    departureTime,
    distance,
    sourceStationCode,
    sourceStationName,
    destinationStationCode,
    destinationStationName,
  };
});

//For case 1 - Train info with longest route
const longestRoute = () => {
  let maxDistance = 0;
  for (const data of trainData) {
    if (+data.distance > maxDistance) {
      maxDistance = +data.distance;
    }
  }
  return trainData.filter((data) => +data.distance === maxDistance);
};
// console.log(longestRoute())

//For case 2 -  Train info with shortest route
const shortestRoute = () => {
  let minDistance = Infinity;
  for (const data of trainData) {
    const distance = +data.distance;
    if (!isNaN(distance) && distance < minDistance) {
      minDistance = distance;
    }
  }
  return trainData.filter((data) => +data.distance === minDistance);
};
// console.log(shortestRoutes())

//For case 3 -  Train info with which covers less no of station between starting and ending station
const lessNoOfStations = () => {
  const trainStations = {}; // Object to store train numbers and total stations

  for (const data of trainData) {
    const trainNumber = data.trainNo;
    const trainName = data.trainName;
    const totalStations = data.SEQ;

    if (
      !trainStations[trainNumber] ||
      totalStations < trainStations[trainNumber].trainTotalStation
    ) {
      trainStations[trainNumber] = {
        trainNumber,
        trainName,
        trainTotalStation: totalStations,
      };
    }
  }
  const sortedTrains = Object.values(trainStations).sort(
    (a, b) => a.trainTotalStation - b.trainTotalStation
  );

  return sortedTrains;
};
// console.log(lessNoOfStations())

//For case 4 - Train info with which covers maximum no of station between starting and ending station
const maxNoOfStations = () => {
  const trainStations = {};

  for (const data of trainData) {
    const trainNumber = data.trainNo;
    const trainName = data.trainName;
    const totalStations = data.SEQ;

    if (
      !trainStations[trainNumber] ||
      totalStations > trainStations[trainNumber].trainTotalStation
    ) {
      trainStations[trainNumber] = {
        trainNumber,
        trainName,
        trainTotalStation: totalStations,
      };
    }
  }

  const sortedTrains = Object.values(trainStations).sort(
    (a, b) => b.trainTotalStation - a.trainTotalStation
  );

  let flag = -1;
  for (let i = 0; i < sortedTrains.length - 1; i++) {
    if (
      sortedTrains[i + 1].trainTotalStation < sortedTrains[i].trainTotalStation
    ) {
      flag = i;
      break;
    }
  }

  if (flag !== -1) {
    sortedTrains.length = flag + 1;
  }

  return sortedTrains;
};
// console.log(maxNoOfStation())

//For case 5 - No of trains and names of the training.
const numOfTrain = () => {
  const stationNumbers = []; //array to store

  for (let i = 0; i < trainData.length - 1; i++) {
    const currentTrain = trainData[i];
    const nextTrain = trainData[i + 1];

    if (!nextTrain || currentTrain.trainName !== nextTrain.trainName) {
      stationNumbers.push({
        trainName: currentTrain.trainName,
        trainTotalStation: currentTrain.SEQ,
      });
    }
  }
  return stationNumbers;
};
// console.log(numOfTrain())

//For case 6 - Get the name of pickup point and destination point and provide possible options to travel between.
const travelOptions = () => {
  const source = argrument[3],
    destination = argrument[4];

  return trainData.filter(
    (train) =>
      train.sourceStationCode === source &&
      train.destinationStationCode === destination &&
      train.stationCode === source
  );
};
// console.log(travelOptions());

switch (argrument[2]) {
    case "1":
      {
        console.log("1. Train info with longest route: ");
        console.log(longestRoute());
      }
      break;

    case "2":
      {
        console.log("2. Train info with shortest route: ");
        console.log(shortestRoute());
      }
      break;

    case "3":
      {
        console.log(
          "3. Train info with which covers less no of station between starting and ending station:- "
        );
        console.log(lessNoOfStations());
      }
      break;

    case "4":
      {
        console.log(
          "4. Train info with which covers maximum no of station between starting and ending station: -"
        );
        console.log(maxNoOfStations());
      }
      break;

    case "5":
      {
        console.log("5. No of trains and names of the trains:- ");
        console.log(numOfTrain());
      }
      break;

    case "6":
      {
        console.log(
          "6. Get the name of pickup point and destination point and provide possible options to travel between: -"
        );
        console.log(travelOptions());
      }
      break;

    default:
      console.log("Invalid Number!!");
  }