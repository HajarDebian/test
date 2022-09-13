const { sql } = require("../../../DB/connection");

const userMinMax = (req , res)=>{
    const {min , max} = req.query;
    sql.execute(`select name, email, age from users where age > ${min} AND age < ${max}` , 
    (err, result)=>{
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

module.exports = {userMinMax};