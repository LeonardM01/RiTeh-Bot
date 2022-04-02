const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILDS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});
module.exports.client = client;

require('dotenv').config();
//config za databazu da se zna koja je bila zadnja vijest
const config = require('../databases/db.json');
module.exports.config = config;

//databaza u mongoDB
const mongoose = require('mongoose');
module.exports.mongoose = mongoose;
//database connection
mongoose.connect(process.env.CONNECTION_URL, () => {console.log('Connected to database!')}, e => console.error(e));
const guildmodel = require('../databases/schemas/guildschema');
async function create(){
    const guild = await guildmodel.create({ owner: 1, admin: 2, log: 3, prefix: "?", guildID: 69});
    console.log(guild);
}
create();

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