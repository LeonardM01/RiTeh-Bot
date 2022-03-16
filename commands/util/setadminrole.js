const config = require('../../src/main').config; // databaza sa potrebnim podacima
const configManager = require('../../src/configManager'); // funkcija za ispisitavnje stvari u .json file
const client = require('../../src/main').client; // client za dobivanje svi channela

module.exports = {
    name: 'setadminrole',
    description: "Komanda za postavljanje admin role u botovu databazu",
    usage: "?setAdminRole [id rolea]",
    execute(message, args){
        if(message.member._roles.find(role => role === config['admin-role'])){
        let role = message.guild.roles.cache.find(role => role.name === args[0]);
        configManager(config, "admin-role", role.id);
        }
        //var channel = client.channel.cache.get('892153247987560448');
        console.log(client);
    }
}