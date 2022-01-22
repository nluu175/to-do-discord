const fs = require("fs");

const registeredCommands = [];
const fullCommands = [];

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  registeredCommands.push(command.data.toJSON());
  fullCommands.push(command);
}

module.exports = { registeredCommands, fullCommands };
