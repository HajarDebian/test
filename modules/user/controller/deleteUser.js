const { sql } = require("../../../DB/connection");

const deleteUser = (req, res)=>{
    const {id} = req.query;
    sql.execute(`delete from users where id = ${id}` , (err , result)=>{
        if (err) {
            res.json({msg:"query error" , err});
        } else {
            if (result.affectedRows == 1) {
                res.json({msg:"user deleted successfully" , result});
            } else {
                res.json({msg:"in-valid id"});
            }
            
        }
    })
}

module.exports = {deleteUser};