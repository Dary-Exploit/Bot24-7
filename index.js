const mineflayer = require('mineflayer');
const { pathfinder, Movements } = require('mineflayer-pathfinder');

const bot = mineflayer.createBot({
  host: 'servidorsmp12.aternos.me',  
  port: 14317,               
  username: '24/7Bot',  
});

bot.loadPlugin(pathfinder);

bot.on('spawn', () => {
  console.log('Bot conectado al servidor.');

 
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);  
  }, 1000);  
});

bot.on('end', () => {
  console.log('Bot desconectado del servidor. Reconectando...');
  setTimeout(() => bot.quit(), 5000);
});
