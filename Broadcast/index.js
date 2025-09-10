const fs = require("node:fs");
const { Token } = require('./Config');
const { Client, Events, EmbedBuilder, GatewayIntentBits, AttachmentBuilder, Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle, Message, Discord, ModalBuilder, TextInputStyle, TextInputBuilder, MessageButton, MessageActionRow, Partials } = require('discord.js');
const { Database } = require("st.db");
const taxDB = new Database("./Json/data.json")

const client = new Client({intents: 3276799, shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember,]});
const prefix = "a!" 
client.ŚÇ = new Collection();
client.Çɱɗ = new Collection()
module.exports = client;

fs.readdirSync('./Handlers').forEach(async Handler => {
  require(`./Handlers/${Handler}`)(client)
})

process.on("uncaughtException", err => {
  console.log(err)
});

process.on("unhandledRejection", err => {
  console.log(err)
});

process.on("rejectionHandled", err => {
  console.log(err)
});

     client.login(Token).catch((err) => {
  console.log(`Token Error:` + err)
})



