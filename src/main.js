const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILDS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});
require('dotenv').config();
//config za databazu da se zna koja je bila zadnja vijest
const config = require('../databases/db.json');
module.exports.config = config;

const fs = require('fs');
const prefix = '?';
client.commands = new Discord.Collection();
module.exports.clientComands = client.commands;

fs.readdirSync('./commands').forEach(dir =>{
    fs.readdir(`./commands/${dir}`,(err,files)=>{
        if(err) throw err;
        files.forEach(file =>{
            console.log('[command]'+file);
            var command = require(`../commands/${dir}/${file}`);
            client.commands.set(command.name, command);
        });
    });
});

client.on('messageCreate', message => {
    if (!message.content.startsWith('?') || message.author.bot) return;
    var args = message.content.substring(1).split(/ +/);
    //console.log(args);
    var command = args.shift().toLowerCase()
    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        message.reply('there was an error trying to execute that command!' + "\n" + client.commands.get(command).usage);
    }
});

// when the bot is online
client.once('ready', () => {
    client.user.setActivity('www.riteh.uniri.hr', {type : "WATCHING"});
    console.log('RiTeh BOT is online!');
})


client.login(process.env.KEY);