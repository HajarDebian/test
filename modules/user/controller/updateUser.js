const { sql } = require("../../../DB/connection");

const updateUser = (req, res)=>{
    const {id} = req.params; 
    const {name , age} = req.body;
    sql.execute(`update users set name = '${name}' , age = ${age} where id = ${id}` , 
                (err , result)=>{
                    if (err) {
                        res.json({msg:"queru error" , err});
                    } else {
                        if (result.affectedRows == 1) {
                            res.json({msg:"user updated successfully"});
                        } else {
                            res.json({msg:"in-valid id"});
                        }
                    }

    })
}
 
module.exports = {updateUser};