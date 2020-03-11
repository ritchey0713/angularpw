import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includesLetters = false;
  includesNumbers = false;
  includesSymbols = false;
  length = 0;

  onChangeLength = (value: string) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick = () => {
    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const symbols = "!@#$%^&*()"

    let validchars = ''
    if(this.includesLetters){
      validchars += letters
    }

    if(this.includesNumbers){
      validchars += numbers
    }

    if(this.includesSymbols){
      validchars += symbols
    }

    let generatedPassword = ""
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validchars.length)
      generatedPassword += validchars[index]
    }
    this.password = generatedPassword;
  }

  onChangeIncludeLetters = () => {
    this.includesLetters = !this.includesLetters;
  }

  onChangeIncludeNumbers = () => {
    this.includesNumbers = !this.includesNumbers;
  }

  onChangeIncludeSymbols = () => {
    this.includesSymbols = !this.includesSymbols;
  }
}
