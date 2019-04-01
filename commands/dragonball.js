const { mods } = require("../config.json");

module.exports = {
  name: "dragonball",
  description:
    "Roll for dragonballs. Syntax: !bot dragonball. Remove dragonballs from the roll by including the number and a space.",
  execute(message, args) {
    const senderRoles = message.member.roles;
    const checkRoles = mods.some(role => senderRoles.has(role) === true);
    const checkArgsNaN = args.some(arg => isNaN(parseInt(arg)));
    const checkArgsValue = args.some(arg => arg > 7);
    if (checkRoles) {
      const rollDragonball = () => {
        return Math.floor(Math.random() * 7 + 1);
      };
      if (args.length >= 6) {
        return message.reply(
          "For this command you cannot ommit six or more dragonballs in your arguments."
        );
      } else if (checkArgsValue) {
        return message.reply(
          "For this command the dragonball you omit cannot be more than 7 stars."
        );
      } else if (checkArgsNaN) {
        return message.reply(
          "For this command arguments must be numbers and separated by a single space."
        );
      } else if (args.length === 0) {
        return message.reply(`${rollDragonball()}☆`);
      } else {
        const compare = () => {
          let dragonball = rollDragonball().toString();
          const argsContain = args.some(arg => arg === dragonball);
          if (!argsContain) {
            return message.reply(`${dragonball}☆`);
          } else {
            compare();
          }
        };
        return compare();
      }
    }
  }
};
