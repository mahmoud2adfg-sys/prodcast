const { ActivityType, Events } = require('discord.js');
const Client = require('../index.js');

Client.on(Events.ClientReady, async (c) => {
  console.log(require('chalk').red.bold(`${Client.user.username} is Online !`))
  
  // تعيين حالة الستريمنج
});
