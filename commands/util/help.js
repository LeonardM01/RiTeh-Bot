const { DiscordAPIError, MessageEmbed } = require("discord.js")
const fs = require("fs");

const clientComands = require('../../src/main').clientComands;

module.exports = {
    name: 'help',
    description: "Help komanda za ispisivanje svi mogućih komandi",
    usage: "?help [null/ime komande]",
    execute(message, args, cache){
        //embeded poruka u kojoj se salju postojece funkcije
        if(!args.length){
            //ako se nije upisala komanda tocna onda se ispisuju sve komande
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
                },{
                    name: "?ban",
                    value: "Komanda za bannanje željenog usera"
                },{
                    name: "?timeout",
                    value: "Komanda za timeout-anje željenog usera"
                },
                {
                    name: "?setadminrole",
                    value: "Komanda za postavljanje admin role u botovu databazu"
                },{
                    name: "?setprefix",
                    value: "Komanda za postavljanje admin role u botovu databazu"
                },{
                    name: "?setrole",
                    value: "Komanda za davanje nekog rola osobi"
                },{
                    name: "?removerole",
                    value: "Komanda za micanje rola osobe"
                },{
                    name: "?poll",
                    value: "Komanda za stvaranje poll-a"
                }
                ])
                message.channel.send({embeds : [embed]});
        }
        //ako se upise help za tocnu komandu onda se posalje tocna trazena komanda
        else{
            let komanda = clientComands.get(args[0]);
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setThumbnail("http://www.riteh.uniri.hr/media/filer_public_thumbnails/filer_public/23/b8/23b8da35-e7b4-40fe-abb1-013c9df5c64c/ivo_ipsic.jpg__300x0_q92_crop_subsampling-2_upscale.jpg")
                .setTitle("\nKoristenje komande:")
                .setDescription(komanda.name +" : " + komanda.description + "\n"+ komanda.usage)
                message.channel.send({embeds : [embed]});
        }

    }
}