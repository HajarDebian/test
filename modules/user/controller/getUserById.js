const { sql } = require("../../../DB/connection");

const UserById = (req , res)=>{
    const {id} = req.params;
    sql.execute(`select * from users where id = ${id}` , (err, result)=>{
        if (err) {
            res.json({msg:"query error"} , err);
        } else {
            if (result.length > 0) {
                res.json({msg:"user found" , result:result[0]});
            } else {
                res.json({msg:"in-valid user id"});
            }
        }
    })
}

module.exports = {UserById};