const mongoose = require('mongoose');

const QuartosSchema = new mongoose.Schema({
    name: {
        type: String
        ,require: true
    }, // nome da sala
    description: {
        type: String
        ,require: true
    }, // Descrição do quarto
    price: {
        type: Number
        ,require: true
    }, // Preço da diária do quarto
    image: {
        type: String
        ,require: true
    }, // Foto principal da sala
});

mongoose.model(QuartosSchema, 'Quartos');

class Quarto {
    constructor(body){
        this.body = body;
        this.Erros = new Array(); 
    }

    
}
