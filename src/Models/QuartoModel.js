const mongoose = require('mongoose');

const QuartoSchema = new mongoose.Schema({
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

const QuartoData = mongoose.model('Quartos',QuartoSchema);

class Quarto {
    constructor(body){
        this.body = body;
        this.Erros = new Array(); 
    }

    register(){
        this.validator();
    }
    validator(){
        this.cleanData()
    }
    cleanData(){
        for(const key in this.body){
            if(!this.body[key]) this.body[key]==''; 
        }

        this.body = {
            name: this.body.name,
            description: this.body.descrition,
            price: this.body.valor_noite,
            image:  this.body.foto
        }
    }
}

module.exports = Quarto;
