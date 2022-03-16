const config = require('../../src/main').config; // databaza sa potrebnim podacima
const configManager = require('../../src/configManager'); // funkcija za ispisitavnje stvari u .json file
const client = require('../../src/main').client;// client varijabla za dobivanje svih channela u serveru

module.exports = {
    name: 'setprefix',
    description: "Komanda za postavljanje admin role u botovu databazu",
    usage: "?setprefix [znak]",
    execute(message, args){
        if(message.member._roles.find(role => role === config['admin-role'])){
            configManager(config, "prefix", args[0]);
        }
    }
}