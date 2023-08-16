// const fs = require("fs");
// const csvReader = require("csv-parser");

// const result = [];
// const readCSV = () => {
//   fs.createReadStream("Train_details.csv")
//     .pipe(csvReader())
//     .on("data", (data) => result.push(data))
//     .on("end", () => {
//       for (const r of result) {
//             console.log(r["Train No"])
//       }
//     });
// };
// readCSV();

// const data = fs.readFileSync('Train_details.csv',{
//     encoding: "utf8",
// });

// const rows = data.split('\n').filter((row)=> !isNaN(row[0])).map((row)=> row.split(","));
// console.log(rows)



