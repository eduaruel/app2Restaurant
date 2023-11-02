const mongoose = require('mongoose');

//1 conectar mongodb crear la dependencia
const userSchema = new mongoose.Schema({

    //2 definir el schema
    name: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    verified: {
        type: Boolean,
        default: false
    }
})

//3 configurar la respuesta del usuario en el schema
userSchema.set('toJSON', {
    //document es el schema
    //returnObject es lo que estoy solicitando
    transform: (document, returnObject) => {
        //estoy creando una propiedad que se llame id
        //convertimos de objeto a string

        returnObject.id = returnObject_id.toString();
        //voy a borrar la propiedad_id
        delete returnObject._id;
        //borrar version 
        delete returnObject.__v;
    }

})

//asignar un nombre registar el modelo, que datos o coleccion(tablas) tiene ese modelo  esta en el userSchema
const User = mongoose.model('User', userSchema);
module.exports = User;