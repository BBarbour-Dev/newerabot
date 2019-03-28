require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

authToken = process.env.AUTH_TOKEN;

client.once("ready", () => {
  console.log("Bot online.");
});

client.login(authToken);
