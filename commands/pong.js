module.exports = {
  name: "pong",
  description: "Pong the bot.",
  execute(message, args) {
    message.channel.send("Ping, I guess?");
  }
};
