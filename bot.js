const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'isharrisonafurry':
                bot.sendMessage({
                    to: channelID,
                    message: 'The mighty wisdom of the gods say "yes..."'
                });
            break;

            case 'doesthebotlie':
                bot.sendMessage({
                    to: channelID,
                    message: 'NEVER'
                });
            break;

            case 'ispurplehumanpurple':
                bot.sendMessage({
                    to: channelID,
                    message: 'no'
                });
            break;

            case 'kys':
                bot.sendMessage({
                    to: channelID,
                    message: 'For tech support assistants please Call 1-800-273-8255'
                });
            break;

            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'pong!'
                });
            break;
 
             case 'josh':
                bot.sendMessage({
                    to: channelID,
                    message: 'Josh is a fucking faggot'
                });
            break;
        }
     }
});