const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  owner : String,
  serverName : String,
  moderator : String,
  log : String,
  prefix : String,
  guildId : String,
});

  module.exports = mongoose.model('guilds',guildSchema);