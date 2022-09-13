const { sql } = require("../../../DB/connection");

const deleteBlog = (req , res)=>{
    const {id} = req.params;
    sql.execute(`delete from blogs where id = ${id}`, (err , result)=>{
        if (err) {
            res.json({msg:"query error" , err});
        } else {
            if (result.affectedRows == 1) {
                res.json({msg:"blog deleted successfully" , result});
            } else {
                res.json({msg:"in-valid id"});
            }
        }
    })
}

module.exports = {deleteBlog};