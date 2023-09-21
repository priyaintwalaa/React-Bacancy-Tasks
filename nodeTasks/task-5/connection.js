const mongoose = require('mongoose');

async function connectionDb(url){
    return await mongoose.connect(url)
}

module.exports = connectionDb