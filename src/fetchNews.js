const jsdom = require('jsdom');
const axios = require('axios');
const { Message, MessageEmbed } = require('discord.js');
const embed = new MessageEmbed();

module.exports = (config,link,configManager, message) =>{
    axios.get(link)
        .then(function (response) {
            const dom = new jsdom.JSDOM(response.data);
            let lista = [];
            //funckija se runna ako nema definirane "zadnje obavijesti" u databazi
            if(config.zadnjaObavjest.length == 0){
                let a = dom.window.document.querySelectorAll(`#content > div > div:nth-child(3) > div.grid-5.alpha > ul > li:nth-child(3)`);
                let naslov = a[0].querySelectorAll('h3 > a')[0].textContent;
                configManager(config,'zadnjaObavjest',naslov);
            }
            for(let i = 1;i < 7;i++){
                //definiranje varijabli koje uzimamo sa web stranice pomocu axiosa
                let a = dom.window.document.querySelectorAll(`#content > div > div:nth-child(3) > div.grid-5.alpha > ul > li:nth-child(${i})`);
                let naslov = a[0].querySelectorAll('h3 > a')[0].textContent; //naslov vijesti
                let datum = a[0].querySelectorAll('dl > dd')[0].textContent; //datum objavljene vijesti
                let sazetak = a[0].querySelectorAll('div > p')[0].textContent; //sazetak vijesti
                let naslovLink = a[0].querySelectorAll('h3 > a')[0].getAttribute("href"); //link na website vijesti


                if (config.zadnjaObavjest != naslov.toString()){
                    lista.push(naslov);
                    //embeeded poruka koju bot salje kao odgovor
                    embed
                        .setColor('BLUE')
                        .setTitle(naslov)
                        .setDescription(sazetak)
                        .setFooter(datum)
                        .setURL("http://www.riteh.uniri.hr"+naslovLink)
                    message.reply({embeds : [embed]});
                }else{
                    //ako nema novih vijesti tj novijih od zadnje funkcija odmah staje
                    if(lista.length == 0){
                        break;
                    }
                    configManager(config,'zadnjaObavjest',lista[0]);
                    return lista;
                }
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}