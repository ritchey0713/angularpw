import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""
  includesLetters = false
  includesNumbers = false
  includesSymbols = false

  onButtonClick = () => {
    console.log(this.includesLetters)
    console.log(this.includesNumbers)
    console.log(this.includesSymbols)
    this.password = 'HELLO WORLD'
  }

  onChangeIncludeLetters = () => {
    this.includesLetters = !this.includesLetters
  }

  onChangeIncludeNumbers = () => {
    this.includesNumbers = !this.includesNumbers
  }

  onChangeIncludeSymbols = () => {
    this.includesSymbols = !this.includesSymbols
  }
}
