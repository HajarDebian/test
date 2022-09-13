const router = require('express').Router();
const { allUsers } = require('./controller/allUsers');
const { deleteUser } = require('./controller/deleteUser');
const {signUp} = require('./controller/signUpPage');
const {signIn} = require('./controller/sinInPage');
const { updateUser } = require('./controller/updateUser');
const { userAgeLess } = require('./controller/getUserAgeLess');
const { userMinMax } = require('./controller/getUserAgeMinMax');
const { UserById } = require('./controller/getUserById');
const { userEndA } = require('./controller/userEndA');
const { userStartA } = require('./controller/userStartA');

router.post('/signup' , signUp)

router.post('/signin', signIn)

router.patch('/user/:id' , updateUser) //normal params 

router.delete('/user' , deleteUser) //query params

router.get('/users' , allUsers)

router.get('/finds/:s' , userStartA) //assign s with a , and normal params

router.get('/finde/:e' , userEndA) // assign e with a , and normal params

router.get('/userbyid/:id' , UserById) //normal params

router.get('/usersage' , userMinMax) //assign min with 20 and max with 30 , query params 

router.get('/usersagel/:num' , userAgeLess) // assign num with 30 , and normal params

module.exports = router;