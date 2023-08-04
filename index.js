const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '6642988013:AAHB0JM8YSw4sxHF5AVMshrLtz-CTRXAPK4'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Privet, "Privet ${msg.from.first_name}"')
})