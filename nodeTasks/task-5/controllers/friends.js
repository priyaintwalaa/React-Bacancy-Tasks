const Friend = require('../models/friends')
const User = require('../models/user')

exports.addFriend = async (req,res)=>{
    try {
        const {user_id,friend_ids}=req.body;

        const friend = await Friend.findOne({user_id})
        console.log(friend)

        if(friend){
            for(let i =0;i<friend_ids.length;i++){
                friend.friend_ids.push(friend_ids[i])
            }
            friend.save();
        }else{
            await Friend.create({
           user_id,
           friend_ids
         })
        } 
         res.send({message:"friend is added"})
    } catch (error) {
        res.send({error})
    }
}

exports.getFriend =async (req,res)=>{
    try {
        const userId = req.params.id;

        const user = await User.find({_id:userId})

        const friends = await Friend.find({user_id:userId}).populate('friend_ids','-_id -__v')
    
        res.json({user,friends});
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching friends.' });
      }
}