const connection = require('../database/connection')

module.exports = {

    async index(req, res) {
        const ongs = await connection('incidents').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorizatiton;
    
        const [id] = await connection('incidents').insert({title, description, value, ong_id });
        
        return res.json({ id });
    }
}