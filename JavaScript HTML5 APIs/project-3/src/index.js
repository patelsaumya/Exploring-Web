import '../assets/css/style.css';
import autumnMp4 from '../assets/media/autumn.mp4';

import playIcon from '../assets/img/icons/play.svg';
import pauseIcon from '../assets/img/icons/pause.svg';
import stopIcon from '../assets/img/icons/stop.svg';


const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript HTML5 APIs</h1>
    <div class="player">
        <!-- <video autoplay loop> -->
        <video class="media" controls>
            <source src="${autumnMp4}" type="video/mp4">
            <p>
                HTML5 Video is not supported.
                <a href="${autumnMp4}">Download this video</a> instead.
            </p>
        </video>

        <div class="player__controls">
            <button type="button" class="player__play" aria-label="Play Pause">
                <img src="${playIcon}" alt="Play Pause Icon">
            </button>
            <button type="button" class="player__stop" aria-label="Stop">
                <img src="${stopIcon}" alt="Stop Icon">
            </button>
        </div>
    </div>
`;

const player = document.querySelector('.player');
const play = player.querySelector('.player__play');
const playImg = play.querySelector('img');
const stop = player.querySelector('.player__stop');
const media = player.querySelector('.media');

// media.addEventListener('durationchange', (e) => {
//     console.log(e.target.duration);
// });
// media.addEventListener('canplay', (e) => {
//     console.log('Ready!');
// });
// media.addEventListener('canplaythrough', (e) => {
//     console.log('Can Play Through!');
// });
// media.addEventListener('timeupdate', (e) => {
//     console.log(e.target.currentTime);
// });

// media.addEventListener('play', (e) => {
//     console.log('Play', !e.target.paused);
// });
// media.addEventListener('playing', (e) => {
//     console.log('Playing');
// });
// media.addEventListener('pause', (e) => {
//     console.log('Pause', e.target.paused);
// });
// media.addEventListener('ended', (e) => {
//     console.log('Ended');
// });

const toggleMediaStatus = () => {
    if (media.paused) {
        media.play();
        playImg.src = pauseIcon;
    } else {
        media.pause();
        playImg.src = playIcon;
    }
}

const stopMedia = () => {
    media.pause();
    media.currentTime = 0;
    playImg.src = playIcon;
}

play.addEventListener('click', toggleMediaStatus);
stop.addEventListener('click', stopMedia);
