// made by L.Martinis & D.Kovačević
const { REST } = require('@discordjs/rest');
const NodeCache = require( "node-cache" );
const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

const client = new Discord.Client({intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILDS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});
client.commands = new Discord.Collection();

//cache & database creation
const myCache = new NodeCache();
const rest = new REST({ version: '10' }).setToken(process.env.KEY);


(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
          Routes.applicationGuildCommands(clientId, guildId),
          { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();
// fs.readdirSync('./commands/').forEach(dir =>{
//     fs.readdir(`./commands/${dir}`,(err,files)=>{
//         if(err) throw err;
//         files.forEach(file =>{
//             console.log('[command]'+file);
//             let command = require(`../commands/${dir}/${file}`);
//             client.commands.set(command.name, command);
//         });
//     });
// });
//
// fs.readdir('./events',(err,files)=>{
//     if(err) throw err;
//     files.forEach(file =>{
//         console.log('[event]'+file);
//         let events = require(`../events/${file}`);
//     })
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