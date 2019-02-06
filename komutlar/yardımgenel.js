const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Genel Komutlar! =

ot!yaz: Botun ağzıyla mesaj yazdırır. \not!sunucubilgi: Sunucu bilgilerini gösterir. \not!kullanıcıbilgi: Kullanıcı ile ilgili bilgi verir. \not!istatistik: Botun istatistiklerini gösterir. \not!avatar: Kullanıcının avatarını gösterir. \not!tavsiye: Bot yapımcısına tavsiye verir. \not!bilgi: Bot ve sahip arasında bilgi verir. \not!davet = Botu Sunucunuza Davet Edersiniz. \not!destek: Sunucuda destek talebi açmanızı sağlar.

# Komutlar hakkında yardım almak icin ${prefix}yardım <komut ismi>`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'genel',
  description: 'Genel Komutları gösterir.',
  usage: 'r!genel'
};