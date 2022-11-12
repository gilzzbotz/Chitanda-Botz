let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['6285730794089', 'GilzzExe', true], 
['6281357580873', 'Just Bot', true] 
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  saipul: 'https://saipulanuar.herokuapp.com',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'Apikeys',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Apikeys',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.linkyt = 'https://youtube.com/channel/UCPH9AdS6UQImcRv6IFtQ5lg'
global.WM = 'Gilzz-Botz ©2022'
global.linkgc = 'https://chat.whatsapp.com/CxJShadfxYqCVAHHxdHSiy'
global.linkig = 'https://www.instagram.com/rdtyzagilz'
global.deslink = 'Hai kak, Aku adalah Gil-Botz yang siap bantu memudahkan apapun untuk anda setiap saat dimanapun kapanpun anda berada, ketik #menu untuk melihat list bot menu yang ada, Terimakasih'
global.logo = 'https://telegra.ph/file/a4c895aa49a0068218a54.jpg'
global.titlink = 'Follow Me On Tiktok'
global.bearkey = 'KingOfBear'
global.bodlink = '@cahkonoaea'

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'

//========Url Template Buttons==========//
global.dtu = '🌏 GROUP OFFICIAL'
global.urlnya = global.linkgc

//============= callButtons ============//
global.dtc = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.phn = '+62 957-3079-4089'

//========== Tampilan Bot =============//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/f359275b0754eb03b10ee.jpg', 'https://telegra.ph/file/da2f30ea2b072cf5a4dc0.jpg',
  'https://telegra.ph/file/f359275b0754eb03b10ee.jpg', 'https://telegra.ph/file/f0d64977b523494b37830.jpg',
  'https://telegra.ph/file/c567c6bf2a4812fbcd667.jpg', 'https://telegra.ph/file/b24d6e86a3dec675dcf4a.jpg',
  'https://telegra.ph/file/3535f2dbb810cabc9c01e.jpg', 'https://telegra.ph/file/204991038532d38298e30.jpg',
  'https://telegra.ph/file/c567c6bf2a4812fbcd667.jpg', 'https://telegra.ph/file/bfb00f56d6effdb7dd160.jpg'
]

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
