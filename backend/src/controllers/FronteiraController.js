const Fronteira = require('../models/Fronteira');

module.exports = {
    async index(req, res){
        const front = await Fronteira.find().sort('-createdAt');

        return res.json(front);
    },

    async store(req, res){
        try{      
            name = req.body.name;                   
            username = req.body.username;
            password = req.body.password;
            userKind = req.body.userKind;

            const front = await Fronteira.create({                
                name, 
                username,
                password,
                userKind,                                           
            });

            req.io.emit('front', front);

            return res.json({front}
            );
        }catch(error){
            console.log(error.message);
        }  
    },      
    
    async login(req, res){
        try{  
            username = req.body.username;
            password = req.body.password;

            const fronteiras = await Fronteira.findOne({username: username, password: password});

            if (fronteiras == null){
                return res.json({'status':'NAOACHOU'});
            } else if (fronteiras != null){
                return res.json({'status':'ACHOU'});
            }
        }catch(error){
            console.log(error.message);
        }  
    },
};