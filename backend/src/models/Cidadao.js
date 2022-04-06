const mongoose = require('mongoose');

const CidadaoSchema = new mongoose.Schema({    
    name: String,    
    temperature: {
        type: Number,
        default: 0,
    },   
    statusColor: {
        type: Number,
        default: 0,
    },
    codePulseira: {
        type: Number,
        default: 1111111111,
    },    
    maxDays: {
        type: Number,
        default: 0,
    },  
    entryDate: String,
    departureDate: {
        type: String,
        default: null,
    },
    lastTempUpdate: String,
    difDate: {
        type: Number,
        default: 0,
    }, 
}, {
    timestamps: true,
});

module.exports = mongoose.model('Cidadao', CidadaoSchema);