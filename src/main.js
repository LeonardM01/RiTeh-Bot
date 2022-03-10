const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILDS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});

const fs = require('fs');
const prefix = '!';
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
}
    
client.on('message', message => {
    if (!message.content.startsWith('!') || message.author.bot) return;
    var args = message.content.substring(1).split(/ +/);
    var command = args.shift().toLowerCase()

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message,args);
    } catch (error) {
        message.reply('there was an error trying to execute that command!' + "\n" + client.commands.get(command).usage);
    }
});



client.once('ready', () => {
    console.log('RiTeh BOT is online!');
})
client.login('OTQ5OTgyNDI3OTAyNzk1Nzg2.YiSSFA.VT9RscCjAdak0aQTiaPTX0rLW3Q');