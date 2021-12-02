import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  length = 10;
  includeLetters = true;
  includeNumbers = true;
  includeSymbols = true;
  password = "";

  onGenerate() {
    if (
      this.length > 0 &&
      (this.includeLetters || this.includeNumbers || this.includeSymbols)
    ) {
      const numbers = "1234567980";
      const letters = "abcdefghijklmnopqrstuvwxyz";
      const symbols = "!@#$%^&*()";

      let validCharacters = "";

      if (this.includeLetters) {
        validCharacters += letters;
      }

      if (this.includeNumbers) {
        validCharacters += numbers;
      }

      if (this.includeSymbols) {
        validCharacters += symbols;
      }

      let generatedPassword = "";
      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * validCharacters.length);
        generatedPassword += validCharacters[index];
      }
      this.password = generatedPassword;
    }
  }

  ngOnInit(): void {
    this.onGenerate();
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

    this.onGenerate();
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    this.onGenerate();
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    this.onGenerate();
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    this.onGenerate();
  }

  onButtonClick() {
    this.onGenerate();
  }

  focusMethod = function getFocus() {
    document.getElementById("generateButton").focus();
  };

  copyInput(inputElement: any) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
    this.focusMethod();
  }
}
