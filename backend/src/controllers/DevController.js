const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const response = await Dev.find();
        
        console.log(response);
        return res.json(response);
    },

    async store(req, res) {
        const { github_username, techs } = req.body;

        const response = await axios(`https://api.github.com/users/${github_username}`);

        const { name, bio, avatar_url } = response.data;

        const techsArray = parseStringAsArray(techs);

        dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArray
        });

        return res.json(dev);

    },

    async show(req, res) {
        const { github_username } = req.params;

        const githubExist = await Dev.findOne({ github_username });

        if(githubExist) {
            const response = await axios(`https://api.github.com/users/${github_username}/repos`);    

            return res.json(response.data);
        }

        return res.status(404).json({ "Error": "Error not found Github user subscribe, try another" });

        

        
    },

    async update(req, res) {
        const { _id } = req.params;

        const idExist = await Dev.findOne({_id});

        if(idExist) {
            const { name, avatar_url, bio, techs } = req.body;

            const techsArray = parseStringAsArray(techs);

            await Dev.updateOne({ _id }, {
                name,
                avatar_url,
                bio,
                techs: techsArray,
            });

            return res.status(204).send();
        }

        return res.status(401).json({ "error": "Not exist this Github user, try another." });

        
    },

    async destroy(req, res) {
        const { _id } = req.params;

        const idExist = await Dev.findOne(_id);

        if(idExist) {
            await Dev.deleteOne(idExist); 
            
            return res.status(204).send();
        }

        return res.status(401).json({ "error": "Not exist this Github user, try another." });

       
    }
};
