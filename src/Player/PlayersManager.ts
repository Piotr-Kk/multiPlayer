import { VideoPlayer, IntrVideoSource, IntrPlayerSize } from './VideoPlayer'

class PlayerManager {

  private _winWidth: number;
  private _winHeight: number;
  private _sources: IntrVideoSource[];
  private _playersList: VideoPlayer[] = [];

  constructor (winWidth: number, winHeight: number, sources: IntrVideoSource[]) {
    this._winWidth = winWidth;
    this._winHeight = winHeight;
    this._sources = sources;
    
  }

  public initPlayers(): void {
    const playerSize: IntrPlayerSize = this.calcPlayerSize();

    this._sources.forEach( source => {
      this._playersList.push(new VideoPlayer(playerSize, source));
    });
  }

  private calcPlayerSize() : IntrPlayerSize {
    let width: number;
    let height: number;

    // maybe include wideo size ratio in calculations and improve it
    switch (this._sources.length) {
      case 2 :
        width = this._winWidth / 2;
        height = this._winHeight; 
      case 3 || 4 :
        width = this._winWidth / 2;
        height = this._winHeight / 2;
      case 5 || 6 :
        width = this._winWidth / 3;
        height = this._winHeight / 2; 
      default:
        width = this._winWidth;
        height = this._winHeight;
    }

    return { width: width , height: height }
  }
}

export {
  PlayerManager
}