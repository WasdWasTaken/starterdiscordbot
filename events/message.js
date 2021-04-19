const db = require("quick.db")
const Discord = require('discord.js')
const prefix = '!' //you can change it

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;




  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`)

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

 
  let command = client.commands.get(cmd);
 
  if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (!command) return;











  if (command) command.run(client, message, args);
 






}
