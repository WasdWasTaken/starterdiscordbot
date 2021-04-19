const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login("Put your token here.")
