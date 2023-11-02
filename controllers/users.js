//lo primero debemos hacer es un router 
//router: registrar el post, get,delete
const userRouter = require('express').Router();
//luego que difinimos el router y exportamos en el app,js

//registrar lo que el usuario me envia
userRouter.post('/', (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body
    console.log(name, email, password);
})

module.exports = userRouter;

