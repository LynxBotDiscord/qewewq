const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Yetkili Komutları! =

ot!ban <kişi>: Kullanıcı banlar.\not!giriş-çıkış-ayarla <#kanal> = Gelen giden kanalı ayarlarsınız.\not!mod-log-ayarla <#kanal> = Mod-Log kanalı ayarlamaya yarar.\not!sa-as (kapat/aç) = Birisi selam verdiğinde bot ""Aleyküm Selam Hoşgeldin."" der. \not!kick <kişi>: Kullanıcıyı atar. \not!oylama <konu>: Oylama başlatır. \not!duyuru <duyuru yazısı>: duyuru yapar. \not!temizle <kaç tane>: Mesaj siler. \not!ses-kanal-aç <isim>: sesli kanal açar. \not!yazı-kanal-aç <isim>: Yazılı kanal açar. \not!çekiliş <konu>: Çekiliş başlatır.

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
  name: 'yetkili',
  description: 'Yetkili Komutlarını gösterir.',
  usage: 'yardım'
};