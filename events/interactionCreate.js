const { fullCommands } = require("./../deploy-commands");

module.exports = {
  name: "interactionCreate",
  execute(interaction) {
    if (!interaction.isCommand()) {
      return;
    }

    const currentCommand = fullCommands.filter(
      (command) => command.data.name === interaction.commandName
    )[0];

    currentCommand.execute(interaction);

    console.log(
      `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction with /${interaction.commandName}.`
    );
  },
};
