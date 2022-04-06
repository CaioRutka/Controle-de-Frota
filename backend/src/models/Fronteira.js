const mongoose = require('mongoose');

const FronteiraSchema = new mongoose.Schema({   
    name: String,
    
    username: {
        type: String, unique: true,
    },

    password: {
        type: String,
    },

    userKind: String,    
});

module.exports = mongoose.model('Fronteira', FronteiraSchema);