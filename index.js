const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "//add a prefix here."

client.on("message", message => {
if(message.content === prefix+"ping") {
message.channel.send("Pong!")
}
//ok now lets add an embed.
if(message.content === prefix+"embed") {
let embed = new Discord.MessageEmbed();
.setTitle("Title")
.setDiscription("Discription")
.addField("Field title", "Field value")
.setFooter("Footer")
.setColor("")//set any colur here, you can put hex too but if you just want to give a colour say it in caps example: .setColor("ORANGE").
.addTimestamp()
//tells you what time them embed was requested at (Puts it in footer).
//now lets send the embed.
message.channel.send(embed);

})
//now lets login our bot.
client.login("Put your token here.")
