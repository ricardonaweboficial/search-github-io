const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { github_username, techs } = req.body;

        const response = await axios(`https://api.github.com/users/${github_username}`);

        const { name, bio, avatar_url } = response.data;

        const arrayAsString = techs.split(', ').map(tech => tech.trim());

        dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: arrayAsString
        });

        return res.json(dev);

    }
};
