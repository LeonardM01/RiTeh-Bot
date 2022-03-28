client = require('../src/main').client;

// when the bot is online
client.once('ready', () => {
    client.user.setActivity('www.riteh.hr', {type : "WATCHING"});
    console.log('RiTeh Bot is online.');
});