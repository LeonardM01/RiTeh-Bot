const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILDS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});
module.exports.client = client;

require('dotenv').config();
//config za databazu da se zna koja je bila zadnja vijest
const config = require('../databases/db.json');
module.exports.config = config;


const fs = require('fs');
const configManager = require('./configManager');
client.commands = new Discord.Collection();
module.exports.clientComands = client.commands;

fs.readdirSync('./commands/').forEach(dir =>{
    fs.readdir(`./commands/${dir}`,(err,files)=>{
        if(err) throw err;
        files.forEach(file =>{
            console.log('[command]'+file);
            var command = require(`../commands/${dir}/${file}`);
            client.commands.set(command.name, command);
        });
    });
});

fs.readdir('./events',(err,files)=>{
    if(err) throw err;
    files.forEach(file =>{
        console.log('[event]'+file);
        var events = require(`../events/${file}`);
    })
});

client.login(process.env.KEY);