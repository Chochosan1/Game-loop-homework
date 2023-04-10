import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output('onGameLoopTicked') gameLoopTicked = new EventEmitter<number>();
  gameLoopInterval;
  gameLoopTimeElapsed: number = 0;
  isGameRunning: boolean = false;

  startGame() {
    this.gameLoopInterval = setInterval(() => this.gameLoopTickLogic(), 1000);
    this.isGameRunning = true;
  }

  stopGame() {
    clearInterval(this.gameLoopInterval);
    this.isGameRunning = false;
  }

  gameLoopTickLogic() {
    this.gameLoopTimeElapsed++;
    this.gameLoopTicked.emit(this.gameLoopTimeElapsed);
    console.log('game loop tick: ' + this.gameLoopTimeElapsed);
  }
}
