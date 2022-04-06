const mongoose = require('mongoose');

const LojaSchema = new mongoose.Schema({    
    name: String,

    location: String,
    
    maxClients: {
        type: Number,
        default: 0,
    },  

    username: {
        type: String, unique: true,
    },

    password: {
        type: String,
    },

    userKind: String,     
}, {
    timestamps: true,
});

module.exports = mongoose.model('Loja', LojaSchema);