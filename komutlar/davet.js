const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajına **uçurdum** burdan **uçuramam** ayıp. ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter("OT BOT")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('[Destek Sunucusu](https://discord.gg/UBMqMNv) [Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=538344072490778624&scope=bot&permissions=2146958847)');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'r!davet'
};
