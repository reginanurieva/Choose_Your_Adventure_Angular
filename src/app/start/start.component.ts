import { Character } from './../character.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  character: Character;

  createCharacter(choice: string){
    this.character = new Character(choice);
    console.log(this.character);
  }
  constructor() { }

  ngOnInit() {
  }

}
