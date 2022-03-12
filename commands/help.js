const { DiscordAPIError, MessageEmbed } = require("discord.js")
const fs = require("fs");

const clientComands = require('../src/main').clientComands;

module.exports = {
    name: 'help',
    description: "Help komanda za ispisivanje svi mogućih komandi",
    execute(message, args){

        if(!args.length){
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle("Sve postojeće komande:")
                .setThumbnail("http://www.riteh.uniri.hr/media/filer_public_thumbnails/filer_public/23/b8/23b8da35-e7b4-40fe-abb1-013c9df5c64c/ivo_ipsic.jpg__300x0_q92_crop_subsampling-2_upscale.jpg")
                .addFields([
                {
                   name: "?ispiti",
                   value: "Raspored ispita u semestru" 
                },{
                    name: "?kolokviji",
                    value: "Raspored kolokvija u semestru"
                }, {
                    name: "?raspored",
                    value: "Raspored za semestar"
                }, {
                    name: "?news",
                    value: "Komanda za dobivanje novosti sa riteh.uniri.hr stranice"
                }, {
                    name: "?stup",
                    value: "Jurica based komanda za stavljanje ljudi na STUP SRAMA"
                }
                ])
                message.channel.send({embeds : [embed]});
        }
        else{
            let komanda = clientComands.get(args[0]);
            const embed = new MessageEmbed()
                .setThumbnail("http://www.riteh.uniri.hr/media/filer_public_thumbnails/filer_public/23/b8/23b8da35-e7b4-40fe-abb1-013c9df5c64c/ivo_ipsic.jpg__300x0_q92_crop_subsampling-2_upscale.jpg")
                .setTitle("Koristenje komande:")
                .setDescription("?" + komanda.name +" : " + komanda.description + "\t"+ komanda.usage)
                message.channel.send({embeds : [embed]});
        }

    }
}