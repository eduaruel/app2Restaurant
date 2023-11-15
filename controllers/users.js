
const { response } = require('../app');
//lo primero debemos hacer es un router 
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "REPLACE-WITH-YOUR-eduaruel@gmail.com",
        pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    },
});

async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" eduaruel@gmail.com', // sender address
        to: "eduaruel@gmail.com, eduaruel@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}

main().catch(console.error);



//router: registrar el post, get,delete
const userRouter = require('express').Router();
//luego que difinimos el router y exportamos en el app,js

//registrar lo que el usuario me envia
userRouter.post('/', (req, res) => {
    // console.log(req.body)
    const { name, email, password } = req.body
    console.log(name, email, password);

    if (!name || !email || !password) {
        console.log('campo vacio');
        return res.status(403).json({ error: 'Todos los campos son requerido' })
    } else {
        main()
        return res.status(200).json({ msg: 'usuario creado' })
    }
    //reazo totas las validaciones else if 
    //else con llamado a la bd con operaciones CRUD
}
)

module.exports = userRouter;

