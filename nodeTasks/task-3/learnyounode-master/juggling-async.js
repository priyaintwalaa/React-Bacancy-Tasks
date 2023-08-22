const http = require("http");
const bl = require("bl");

const results = []
let count =0


function resultData(){
    for(let i =0 ;i<3;i++){
        console.log(results[i])
    }
}

function gettingData(index){
    
            http.get(process.argv[2 + index], (res) => {
                
                res.pipe(
                  bl(function (err, data) {
                    if (err) {
                      console.log(err);
                    }
                    // console.log("third" + url);
                    results[index] = data.toString();
                    count++;
                    
                    if(count === 3){
                        resultData()
                    }
                  })
                );
              });
    }

    for( let i=0;i<3;i++){
        gettingData(i)
    }

// function togetUrl(){
//     const urls = process.argv.slice(2)

//     if(urls.length === 0){
//         return;
//     }

//     for(const url of urls){
//         console.log("first" + url)
//         toPrintResult(url)
//     }
// }

// togetUrl();
