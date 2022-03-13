//konstante potrebne za dobavljanje vijesti
const config = require('../src/main').config; //databaza
const configManager = require('../src/configManager'); //config menager za mijenjat databazu
const fetchNews = require('../src/fetchNews'); //metoda za bacanje vijesti

module.exports = {
    name: 'news',
    description: "Komanda za dobivanje novosti sa riteh.uniri.hr stranice",
    usage: "?news",
    execute(message, args){
        let link = 'http://www.riteh.uniri.hr/obrazovanje/preddiplomski-sveucilisni-studij/racunarstvo';
        fetchNews(config, link, configManager, message);
    }
}