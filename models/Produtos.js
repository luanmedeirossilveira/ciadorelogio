const mongoose = require('mongoose')

const ProdutosSchema = new mongoose.Schema({
    image:{
        type: String
    },
    name: {
        type: String,
        maxlength: [200, 'Descrição não pode ser mais de 200 caracteres']
    },
    value: {
        type: Number
    },
    description:{
        type: String,
        maxlength: [500, 'Descrição não pode ultrapassar de 500 caracteres']
    },
    type: {
        type: String
    },
    marca: {
        type: String
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.models.Produtos || mongoose.model('Produtos', ProdutosSchema)