require("dotenv").config();
const fs = require("fs");
const Discord = require("discord.js");
const { prefix } = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const token = process.env.AUTH_TOKEN;

client.once("ready", () => {
  console.log("Bot online.");
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  const cooldowns = new Discord.Collection();

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name);
  }

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.log(error);
    message.reply("What?");
  }
});

client.login(token);
