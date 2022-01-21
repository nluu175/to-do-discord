const dotenv = require("dotenv");
dotenv.config();

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

module.exports = { token: token, clientId: clientId, guildId: guildId };
