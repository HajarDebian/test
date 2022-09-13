const { sql } = require("../../../DB/connection");

const addBlog = (req , res)=>{
    const {title , description , createdBy} = req.body;
    sql.execute(`insert into blogs (title , description , createdBy)
                 values ('${title}' , '${description}' , ${createdBy})` , (err , result)=>{
                    if (err) {
                        res.json({msg:"query error" , err});
                    } else {
                        res.json({msg:"done", result })
                    }
    })
}

module.exports = addBlog;