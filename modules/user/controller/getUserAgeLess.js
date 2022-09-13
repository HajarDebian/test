const { sql } = require("../../../DB/connection");

const userAgeLess = (req , res)=>{
    const {num} = req.params;
    sql.execute(`select name, email, age from users where age < ${num} ` , (err, result)=>{
        if (err) {
            res.json({msg:"query error" , err});
        } else {
            if (result.length > 0) {
                res.json({msg:"users found: " , result});
            } else {
                res.json({msg: "no users found"});
            }
        }
    })
} 

module.exports = {userAgeLess};