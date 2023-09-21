const pool = require('../connection')

async function getUsers(req,res){
  const {rows}=  await pool.query('SELECT * FROM users')
    res.status(200).json({message:"all the users",data:rows})
}
async function getallOrders(req,res){
    const {rows}=  await pool.query('SELECT * FROM orders')
      res.status(200).json({message:"all the orders",data:rows})
  }

async function getUserById(req,res){
    const id = req.params.id
    const {rows} = await pool.query('SELECT * FROM users WHERE id=$1',[id])

    res.status(200).json({
        msg: "Product fetched successfully",
        data: rows.length > 0 ? rows[0] : {},
      });
}

async function deleteUser(req,res){
    const id = req.params.id
    const {rows} = await pool.query('DELETE FROM users WHERE id=$1',[id])

    res.status(200).json({
        msg: "DELETED successfully",
        data: rows.length > 0 ? rows[0] : {},
      });
}
async function addUser(req,res){
    const {first_name,last_name,email,phone,birth_date} = req.body;

    const {rows} = await pool.query('INSERT INTO users (first_name,last_name,email,phone,birth_date) VALUES ($1,$2,$3,$4,$5) RETURNING *',[first_name,last_name,email,phone,birth_date])

    res.status(200).json({
        msg: "Product added successfully",
        data: rows.length > 0 ? rows[0] : {},
      });
}

async function updateUser(req,res){
    const id = req.params.id;
    const {first_name,last_name,email,phone,birth_date} = req.body;

    const {rows} = await pool.query('UPDATE users SET first_name =$1,last_name=$2,email=$3,phone=$4,birth_date=$5 WHERE id=$6 RETURNING *',[first_name,last_name,email,phone,birth_date,id])
    res.status(200).json({
        msg: "User updated successfully",
        data: rows.length > 0 ? rows[0] : {},
      });
}

module.exports={
    getUsers,
    getUserById,
    addUser,
    getallOrders,
    deleteUser,
    updateUser
}