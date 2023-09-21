const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
   user_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
   },
   friend_ids:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
   }]
})



const Friend = mongoose.model('Friend',FriendSchema)

module.exports = Friend