const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Bee Yardım Menüsü =

ot!steam <oyun>: Etiketlenen oyyunun bilgilerini verir. \not!batlefield <oyuncu ismi>: verilen isimli kişinin bilgilerini verir. \not!rocketleague <isim>: İsimli kişinin detaylarını verir. \not!mcsunucu <ip>: Bilgileri verir. \not!mcödül: Minecraft kutu açar. \not!mcbaşarım: Başarım oluşturur. \not!mcskin: Minecraft skini gösterir.

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
  name: 'oyun',
  description: 'Oyun Komutlarını gösterir.',
  usage: 'yardım'
};