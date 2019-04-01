module.exports = {
  name: "ping",
  description: "Ping the bot.",
  execute(message, args) {
    message.channel.send("Pong.");
  }
};
