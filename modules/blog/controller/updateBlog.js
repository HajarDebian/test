const { sql } = require("../../../DB/connection");

const updateBlog = (req , res)=>{
    const {id} = req.params;
    const {title , description} = req.body;
    sql.execute(`update blogs set title = '${title}' , description = '${description}' where id = ${id}` , (err , result)=>{
        if (err) {
            res.json({msg:"query error" , err});
        } else {
            if (result.affectedRows == 1) {
                res.json({msg:"blog updated successfully" , result});
            } else {
                res.json({msg:"in-valid blog id"});
            }
        }
    })
}

module.exports = {updateBlog}; 