const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Postagem = new Schema({

    dono: {
        type: Schema.Types.ObjectId,
        ref: "usuarios",
        required: true        
    },
    fotoDono: {
        type: String,
        default: "https://www.socialdub.com/profilepictures/205076/2050760159395408.jpg?x2"
    },
    nomeDono: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now()
    },
    conteudo: {
        type: String,
        required: true
    },
    foto: {
        type: String
    },
    curtidas: {
        type: Number
    },
    compartilhamentos: {
        type: Number
    }

})

mongoose.model("postagens", Postagem)
