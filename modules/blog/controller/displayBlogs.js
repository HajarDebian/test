const { sql } = require("../../../DB/connection");

const displayBlogs = (req , res)=>{
    const {id} = req.params;
    sql.execute(`select title , description from blogs where createdBy = ${id}` , (err , result)=>{
        if (err) {
            res.json({msg:"query error" , err});
        } else {
            if (result.length > 0 ) {
                res.json({msg:"done", result });
            } else {
                res.json({msg:"this user has no blogs"});
            }
        }
    })
}

module.exports = {displayBlogs};