const { sql } = require("../../../DB/connection");

const signIn = (req, res)=>{
    const {email, password} = req.body;
    sql.execute(`select * from users where email = '${email}' AND password = '${password}'` , 
    (err , result)=>{
        if (err) {
            res.json({msg: "query error" , err});
        } else {
            if (result.length) {
                res.json({msg: "Done" , result: result[0]});
            } else {
                res.json({msg: "check your email and password!"});
            }
        }

    })
}

module.exports = {signIn};