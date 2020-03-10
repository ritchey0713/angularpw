import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""
  includesLetters = false

  onButtonClick = () => {
    console.log(this.includesLetters)
    this.password = 'HELLO WORLD'
  }

  onChangeIncludeLetters = () => {
    this.includesLetters = !this.includesLetters
  }
}
