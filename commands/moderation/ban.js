const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Komanda za bananje korisnika')
    .addUserOption(option =>
      option.setName('korisnik')
        .setDescription('Odabir korisnika u serveru')
        .setRequired(true),
    ),
  async execute(interaction) {
    console.log(interaction);
    // if(interaction)
  },

};
