const fs = require("fs");
const path = require("path");

const mymodule = function (dir, str, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    const list1 = list.filter(function(file){
        return path.extname(file) === ("." + str);
    })
    // list.forEach(e=>{
    //     if(path.extname(e)=== ("." + str)){
    //     //  console.log(e)
    //         return e;
    //     }
    //  })
    callback(null, list1);
  });
};

module.exports = mymodule;
