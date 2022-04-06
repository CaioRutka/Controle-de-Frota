const Cidadao = require('../models/Cidadao');

const moment = require('moment');

module.exports = {
    async index(req, res){
        const cidadoes = await Cidadao.find().sort('-createdAt');

        return res.json(cidadoes);
    },

    async store(req, res){
        try{      
            D = new Date();
            
            lastTempUpdate = D.toLocaleString();
            entryDate = D.toLocaleString();
            name = req.body.name;            
            temperature = req.body.temperature; 
            statusColor = req.body.statusColor; 
            codePulseira = req.body.codePulseira;  
            maxDays = req.body.maxDays;                   

            if (temperature < 37) {
                statusColor = 0
            } else if ((temperature >= 37 && temperature <= 37.5)) {
                statusColor = 1
            } else if (temperature > 37.5){
                statusColor = 2
            }          

            const cida = await Cidadao.create({                
                name,
                temperature,                
                statusColor,  
                codePulseira,
                entryDate,   
                lastTempUpdate, 
                maxDays,          
            });

            req.io.emit('cidadao', cida);

            return res.json({cida});
        }catch(error){
            console.log(error.message);
        }  
    }, 

    async updatetemperature(req, res){
        try{
            temperature = req.body.temperature;
            const code = req.params.code;
            const cida = await Cidadao.findOne({ codePulseira: code }).exec();

            cida.temperature = temperature;

            if (cida.temperature < 37) {
                cida.statusColor = 0
            } else if (cida.temperature >= 37 && cida.temperature <= 38) {
                cida.statusColor = 1
            } else if (cida.temperature > 38){
                cida.statusColor = 2
            }  

            await cida.save();

            req.io.emit('tempUpdated', cida);

            return res.json({cida});          
        }catch(error){
            console.log(error.message);
        }        
    },

    async findCidadaoByCodeAndUpdate(req, res){
        try{ 
            D = new Date();
            
            maxDays = req.body.maxDays;
            lastTempUpdate = D.toLocaleString();
            temperature = req.body.temperature;           
            code = req.body.code;
            const cida = await Cidadao.findOne({ codePulseira: code }).exec(); 
            
            cida.temperature = temperature;
            cida.lastTempUpdate = lastTempUpdate;
            cida.maxDays = maxDays;
            
            if (cida.temperature < 37) {
                cida.statusColor = 0
            } else if (cida.temperature >= 37 && cida.temperature <= 38) {
                cida.statusColor = 1
            } else if (cida.temperature > 38){
                cida.statusColor = 2
            }  

            await cida.save();

            req.io.emit('find', cida);

            return res.json({cida});          
        }catch(error){
            console.log(error.message);
        }        
    },

    async departure(req, res){
        try{
            departureDate = new Date();
            code = req.body.code;
            const cida = await Cidadao.findOne({ codePulseira: code }).exec();

            cida.departureDate = departureDate.toLocaleString();

            await cida.save();

            req.io.emit('departure', cida);

            return res.json({cida});          
        }catch(error){
            console.log(error.message);
        }        
    },
};