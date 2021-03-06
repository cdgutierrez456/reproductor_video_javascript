import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const button = document.querySelector("button")
const buttonMute = document.querySelector(".muted")
const player = new MediaPlayer({
    el: video, plugins: [new AutoPlay()]
});

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMuted();
