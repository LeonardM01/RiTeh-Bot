const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILDS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});

require('dotenv').config();

const fs = require('fs');
client.commands = new Discord.Collection();

//cache & database creation
const mongoose = require('mongoose');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();


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

mongoose.connect(process.env.CONNECTION_URL ,(err) => {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  });

module.exports.client = client;
module.exports.mongoose = mongoose;
module.exports.myCache = myCache;
module.exports.clientComands = client.commands;