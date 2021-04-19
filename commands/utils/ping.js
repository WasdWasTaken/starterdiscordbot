module.exports = {
name: 'ping',
  description: 'My latency!',
  usage: 'ping',
  category: 'utils',
  run: async(client, message, args) => {
    message.channel.send("pong!")
  }
