
interface IntrVideoSource {
  source: string,
  mediaType: string,
  startTime: number // timestamp? 
}

interface IntrPlayerSize {
  height: number,
  width: number
}

class VideoPlayer { 

  private _player: HTMLVideoElement;

  constructor(playerSize: IntrPlayerSize, videoSource: IntrVideoSource) {
    let videoTag: HTMLVideoElement = document.createElement('video'); 
    let sourceTag: HTMLSourceElement = document.createElement('source');

    videoTag.appendChild(sourceTag);

    sourceTag.src = videoSource.source;
    sourceTag.type = videoSource.mediaType;
    videoTag.width = playerSize.width;
    videoTag.height = playerSize.height;

    this._player = videoTag;
  }

  public get videoDomElement() : HTMLVideoElement {
    return this._player;
  }

  public play(): void {
    //Add something in future
    this._player.play();
  }
  
  public pause(): void {
    //Add something in future
    this._player.pause()
  }

}

export { 
  VideoPlayer, 
  IntrVideoSource,
  IntrPlayerSize
}