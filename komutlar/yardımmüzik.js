const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Müzik Komutlar! =

ot!çal: istediğiniz müziği çalar. \not!dur: Müziği durdururu. \not!geç: Bir sonraki müziğer geçer. \not!ses: sesi ayarlar. \not!çalan: çalan şarkıyı gösterir. \not!kuyruk: Kuyruktaki şarkıları gösterir. \not!duraklat: Müziği duraklatır. \not!devam: Müziğe devam eder.

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
  name: 'müzik',
  description: 'Müzik Komutlarını gösterir.',
  usage: 'yardım'
};