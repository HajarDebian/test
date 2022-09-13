const { sql } = require("../../../DB/connection");

const signUp = (req, res)=>{
    const {name , email , password , cpassword , age} = req.body;
    if (password === cpassword) {
        sql.execute(`select email from users where email = '${email}'` , (err , result)=>{
            if (err) {
                res.json({msg:"query error" , err});
            } else {
                if (result.length) {
                    res.json({msg:"email exists" , email});
                } else {
                    sql.execute(`insert into users (name , email , age , password)
                                  values ('${name}' , '${email}' , ${age} , '${password}')` ,
                                   (err , result)=>{

                                        if (err) {
                                            res.json({msg:"query error" , err});
                                        } else {
                                            res.json({msg:"done", result })
                                        }

                    })
                }
            }
        })
    } else {
        res.json({msg:'passwords mismatch'})
    }
}

module.exports = {signUp};