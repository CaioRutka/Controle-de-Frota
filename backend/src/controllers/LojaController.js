const Loja = require('../models/Loja');

module.exports = {
    async index(req, res){
        const lojas = await Loja.find().sort('-createdAt');

        return res.json(lojas);
    },

    async store(req, res){
        try{      
            console.log(req.body.name);
            console.log(req.body.location);
            console.log(req.body.maxClients);
            console.log(req.body.username);
            console.log(req.body.password);
            console.log(req.body.userKind);


            name = req.body.name;
            location = req.body.location;
            maxClients = req.body.maxClients;        
            username = req.body.username;
            password = req.body.password;
            userKind = req.body.userKind;

            const loja = await Loja.create({                
                name,  
                location,
                maxClients,   
                username,
                password,
                userKind,               
            });

            req.io.emit('loja', loja);

            return res.json({loja}
            );
        }catch(error){
            console.log(error.message);
        }  
    },   
    
    async login(req, res){
        try{  
            username = req.body.username;
            password = req.body.password;

            const lojas = await Loja.findOne({username: username, password: password});

            if (lojas == null){
                return res.json({'status':'NAOACHOU'});
            } else if (lojas != null){
                return res.json({'status':'ACHOU'});
            }
  
        }catch(error){
            console.log(error.message);
        }  
    },
};