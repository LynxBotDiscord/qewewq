const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('Bot çalışmaya hazır ve çalıştı!')  

    var Games = [
  
        "● ot!yardım ●",
      
        "● ot!davet ●",
      
        "● Bot henüz test aşamasındadır! ●",
      
        "● Giriş Çıkış mesajları güncellendi! ●",
      
        "● Kick komutu aktif, Uyarı komudu bakımdadır! ●",
      
        "● Kurucu : Ahmet 半仙#3169 ●",
      
        "● ot!8ball ─ ot!ayarlar ─ ot!stat-kur ─ ot!stat-sıfırla ●"
 
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setActivity(Games[random], "https://www.twitch.tv/thepublica")
        }, 2 * 2500);

}; 