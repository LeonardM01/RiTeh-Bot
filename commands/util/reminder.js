const { MessageCollector, Collection } = require('discord.js');

async function getDate(message, args, cache) {
    let MESSAGE_COLLECTOR = new MessageCollector(message.channel, {max: 2, time: 15000});
    let date = new Date;
    
    message.channel.send("Izaberite datum podsjetnika:");
 
    MESSAGE_COLLECTOR.on('collect', (dateMessage) => {
        console.log(dateMessage);
    })
}

module.exports = {
    name: 'reminder',
    description: 'Komanda za stvaranje podsjetnika',
    usage: '?reminder',
    execute(message, args, cache) {
        getDate(message, args, cache);
    }

}