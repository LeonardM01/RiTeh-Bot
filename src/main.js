// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

// .env config
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, '../commands/');
const commandFiles = fs.readdirSync(commandsPath);

for (const dir of commandFiles) {
  for (const file of fs.readdirSync(commandsPath + dir)) {
    const filePath = path.join(commandsPath + dir, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
  }
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready and connected!');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  }
  catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);

module.exports = client;
module.exports = dotenv;
