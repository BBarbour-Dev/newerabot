module.exports = {
  name: "explore",
  description: "Explore the depths of space and see what you find.",
  execute(message, args) {
    const random = Math.floor(Math.random() * 100 + 1);
    console.log(random);
  }
};
