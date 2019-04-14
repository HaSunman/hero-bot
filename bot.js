const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Hello Everybody!`);
});

bot.on('message', msg => {
  if (msg.content === '幹') {
    msg.reply('做的好! やりま した ね！');
  }
});

bot.on('message', msg => {
  if (msg.content === '你好') {
    msg.reply('你好阿');
  }
});

bot.on('message', msg => {
  if (msg.content === '狗狗') {
    msg.reply('臭雞雞');
  }
});

bot.on('message', msg => {
  if (msg.content === '!hasun') {
    msg.reply('他是單細胞');
  }
});

bot.on('message', msg => {
  if (msg.content === '!uu') {
    msg.reply('她是大美女');
  }
});

bot.on('message', msg => {
  if (msg.content === '!diana') {
    msg.reply('她是美女');
  }
});

bot.on('message', msg => {
  if (msg.content === 'omg') {
    msg.reply('what did you say?');
  }
});

bot.on('message', msg => {
  if (msg.content === '小小') {
    msg.reply('她是小可愛');
  }
});

bot.on('message', msg => {
  if (msg.content === 'lapus') {
    msg.reply('他是小短腿');
  }
});

bot.login('NTY2Mzk5OTU4MTg2NTkwMjA5.XLIz_w.T1dJhUgpZzrWSy5BDs6Gw5btTMM');
