const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILDS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_MESSAGES"]});

client.once('ready', () => {
    console.log('RiTeh BOT is online!');
})

//checking if the bot is called using !
const prefix = '!';
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // test komanda
    if(command === 'ping'){
        message.channel.send('pong!');
    } 
    // komanda za ispitne rokove
    else if (command === 'ispiti'){
        message.channel.send('http://www.riteh.uniri.hr/media/filer_public/1c/86/1c867b09-cbdc-4f07-8c4a-a067f83c8973/ispitni-rokovi_pss_ra_2021-2022.pdf');
    }
    //komanda za kolokvije
    else if (command === 'kolokviji'){
        message.channel.send('http://www.riteh.uniri.hr/media/filer_public/c1/01/c101d2c7-9519-415c-b8b4-e01c0389a685/plan_kolokvija_pss_ra_2021-2022.pdf');
    }
    //komanda za raspored
    else if (command === 'raspored'){
        message.channel.send('http://www.riteh.uniri.hr/media/filer_public/28/cd/28cd0b99-a80c-4521-a21b-8b542f383b76/raspored_pss_rac_2021_2022_ljetni_v4.pdf');
    } 
    //komanda za stavljanje na stup srama
    else if (command == 'stup'){
        const member = message.mentions.members.first();
        member.roles.add("913855955786149908");
    }
});


client.login('OTQ5OTgyNDI3OTAyNzk1Nzg2.YiSSFA.VT9RscCjAdak0aQTiaPTX0rLW3Q');