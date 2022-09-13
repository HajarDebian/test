const { sql } = require("../../../DB/connection");
const blogNuser = (req , res)=>{
    sql.execute(`select blogs.title, blogs.description, users.name, users.email, users.age from blogs inner join users on users.id = blogs.createdBy` , (err , result)=>{
        if (err) {
            res.json({msg:"query error" , err});
        } else {
            res.json({msg:"done", result });

        }
    })
}

module.exports = {blogNuser};