import { VideoPlayer } from './Player/VideoPlayer'

function main(): void {
  const win: any = <any>window;

  const player1 = new VideoPlayer({ width: 300, height: 150 }, {
    source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    mediaType: 'video/mp4',
    startTime: 0
  });

  const player2 = new VideoPlayer({ width: 300, height: 150 }, {
    source: 'https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4',
    mediaType: 'video/mp4',
    startTime: 0
  });

  const player3 = new VideoPlayer({ width: 300, height: 150 }, {
    source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    mediaType: 'video/mp4',
    startTime: 0
  });

  const player4 = new VideoPlayer({ width: 300, height: 150 }, {
    source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    mediaType: 'video/mp4',
    startTime: 0
  });

  const player5 = new VideoPlayer({ width: 300, height: 150 }, {
    source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    mediaType: 'video/mp4',
    startTime: 0
  });

  const $el1: HTMLElement = win.document.getElementById('videoPlayerDiv1');
  const $el2: HTMLElement = win.document.getElementById('videoPlayerDiv2');
  const $el3: HTMLElement = win.document.getElementById('videoPlayerDiv3');
  const $el4: HTMLElement = win.document.getElementById('videoPlayerDiv4');
  const $el5: HTMLElement = win.document.getElementById('videoPlayerDiv5');
  const $play: HTMLElement = win.document.getElementById('playerPlay');
  const $pause: HTMLElement = win.document.getElementById('playerPause');

  if ($el1 && $el2) {
    $el1.appendChild(player1.videoDomElement);
    $el2.appendChild(player2.videoDomElement);
    $el3.appendChild(player3.videoDomElement);
    $el4.appendChild(player4.videoDomElement);
    $el5.appendChild(player5.videoDomElement);
  } 

  $play.addEventListener('click', (e) => {
    player1.play();
    player2.play();
    player3.play();
    player4.play();
    player5.play();
  }, false);

  $pause.addEventListener('click', (e) => {
    player1.pause();
    player2.pause();
    player3.pause();
    player4.pause();
    player5.pause();
  }, false);
}

setTimeout(main, 300);
