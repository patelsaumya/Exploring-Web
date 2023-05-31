import '../assets/css/style.css';
import autumnMp4 from '../assets/media/autumn.mp4';
import autumnMp3 from '../assets/media/autumn.mp3';

import playIcon from '../assets/img/icons/play.svg';
import pauseIcon from '../assets/img/icons/pause.svg';
import stopIcon from '../assets/img/icons/stop.svg';
import volumeIcon from '../assets/img/icons/volume.svg';
import volumeMuteIcon from '../assets/img/icons/volume-mute.svg';
import pipIcon from '../assets/img/icons/popup.svg';


const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript HTML5 APIs</h1>
    <div class="player">
        <!--
        <audio class="media" controls>
            <source src="${autumnMp3}" type="audio/mpeg">
        </audio>
        -->

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
            <div class="player__progress">
                <input type="range" class="player__timeline" min="0" max="100" value="0">
                <span class="player__duration"></span>
            </div>
            <button type="button" class="player__pip" aria-label="Picture-in-Picture">
                <img src="${pipIcon}" alt="Picture-in-Picture Icon">
            </button>
            <div class="player__sound">
                <img src="${volumeIcon}" class="player__mute" alt="Volume Icon">
                <input type="range" class="player__volume" min="0" max="100" value="100">
            </div>
        </div>
    </div>
`;

const player = document.querySelector('.player');
const play = player.querySelector('.player__play');
const playImg = play.querySelector('img');
const stop = player.querySelector('.player__stop');
const media = player.querySelector('.media');
// const media = new Audio(autumnMp3);
const timeline = player.querySelector('.player__timeline');
const duration = player.querySelector('.player__duration');
const volume = player.querySelector('.player__volume');
const volumeToggle = player.querySelector('.player__mute');
const pip = player.querySelector('.player__pip');

let totalDuration;

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

const getTime = (duration) => {
    const time = parseInt(duration.toFixed(), 10);
    const minutes = `${parseInt(time / 60)}`.padStart(2, 0);
    const seconds = `${time % 60}`.padStart(2, 0);
    return `${minutes}:${seconds}`;
}

const setInitialDuration = (e) => {
    totalDuration = getTime(e.target.duration);
    duration.innerText = `00:00 / ${totalDuration}`;
}

const setDuration = (e) => {
    const currentDuration = getTime(e.target.currentTime);
    const progress = (e.target.currentTime / e.target.duration) * 100;
    timeline.value = progress;
    duration.innerText = `${currentDuration} / ${totalDuration}`;
}

const skipToPosition = (e) => {
    const position = parseInt(e.target.value, 10) / 100;
    media.currentTime = media.duration * position;
}

const setVolume = (e) => {
    const position = parseInt(e.target.value, 10) / 100;
    media.volume = position;
    volumeToggle.src = media.volume > 0 ? volumeIcon : volumeMuteIcon;
}

const toggleVolume = () => {
    const isMuted = media.volume === 0;
    volumeToggle.src = isMuted ? volumeIcon : volumeMuteIcon;
    volume.value = isMuted ? 100 : 0;
    volume.dispatchEvent(new Event('input'));
    // media.volume = isMuted ? 1 : 0;
}

play.addEventListener('click', toggleMediaStatus);
stop.addEventListener('click', stopMedia);

media.addEventListener('durationchange', setInitialDuration);
media.addEventListener('timeupdate', setDuration);
media.addEventListener('ended', stopMedia);

timeline.addEventListener('input', skipToPosition);
volume.addEventListener('input', setVolume);
volumeToggle.addEventListener('click', toggleVolume);

const initPictureInPicture = () => {
    pip.addEventListener('click', () => {
        if (!document.pictureInPictureElement) {
            media.requestPictureInPicture();
        } else {
            document.exitPictureInPicture();
        }
    });
    media.addEventListener('enterpictureinpicture', () => {
        console.log('Entered PiP');
    });
    media.addEventListener('leavepictureinpicture', () => {
        console.log('Left PiP');
    });
}

if ('pictureInPictureEnabled'  in document) {
    initPictureInPicture();
}