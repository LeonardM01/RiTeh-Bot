const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Testing command that replies with pong!'),
  async execute(interaction) {
    await interaction.reply({ content: 'Jebeni pong!', ephemeral: true });
  },
};
