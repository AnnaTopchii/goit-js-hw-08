import Player from "@vimeo/player" 
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function (event) {
    console.log(event.seconds);
    const currentTime = event.seconds;

    localStorage.setItem(VIDEO_CURRENT_TIME, currentTime);
};

player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });

player.on('timeupdate', throttle(onPlay, 1000));

const timeToStartFrom = localStorage.getItem(VIDEO_CURRENT_TIME);
console.log(timeToStartFrom);

player.setCurrentTime(timeToStartFrom).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});