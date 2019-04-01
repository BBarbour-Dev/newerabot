module.exports = {
  name: "atomsmash",
  description: "Smash them to pieces.",
  execute(message, args) {
    const gen = "237011174854623233";
    const display = message.member.displayName;
    const damage = Math.floor(Math.random() * (70 - 45) + 45);
    if (message.author.id !== gen) {
      return message.channel.send(
        `Sorry ${display} you lack the strength and heroism to use this technique.`
      );
    } else if (args.length === 0 || args.length >= 2) {
      return message.channel.send(
        `${display} uses ⚛🤜 on the planet and deals ${damage} piercing damage.`
      );
    } else {
      return message.channel.send(
        `${display} uses ⚛🤜 on ${args[0]} and deals ${damage} piercing damage.`
      );
    }
  }
};
