import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumberElements = [];
  evenNumberElements = [];

  onGameLoopTicked(gameLoopTimeElapsed: number) {
    if (gameLoopTimeElapsed % 2 === 0)
      this.evenNumberElements.push(gameLoopTimeElapsed);
    else
      this.oddNumberElements.push(gameLoopTimeElapsed);
  }
}
