client = require('../src/main').client;
config = require('../src/main').config;

//gleda ima li poruka za komandu
client.on('messageCreate',message=>{
    // provjera prefixa 
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    try {
        // runnanje modula
        client.commands.get(command).execute(message,args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});