const { sql } = require("../../../DB/connection");

const allUsers = (req , res)=>{
    sql.execute(`select * from users` , (err , result)=>{
        if (err) {
            res.json({msg:"query error" , err});
        } else {
            res.json({msg: "all users: " , result});
        }
    })
}

module.exports = {allUsers};