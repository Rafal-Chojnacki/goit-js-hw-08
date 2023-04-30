import Player from '@vimeo/player';
import { throttle } from 'lodash';

    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);
    
    player.on('timeupdate', throttle(function(data) {
        const currentTime = data.seconds;
        localStorage.setItem('lastTime', currentTime);;
    }, 1000));
  
      const lastTime = localStorage.getItem('lastTime');
if (lastTime) {
  player.setCurrentTime(lastTime);
}