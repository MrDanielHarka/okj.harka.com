import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  length = 15;
  includeLowercase = true;
  includeUppercase = true;
  includeNumbers = true;
  includeSymbols = true;
  password = "";

  onGenerate() {
    if (
      this.length > 0 &&
      (this.includeLowercase ||
        this.includeUppercase ||
        this.includeNumbers ||
        this.includeSymbols)
    ) {
      const numbers = "1234567980";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const symbols = "!@#$%^&*()";

      let validCharacters = "";

      if (this.includeLowercase) {
        validCharacters += lowercase;
      }

      if (this.includeUppercase) {
        validCharacters += uppercase;
      }

      if (this.includeNumbers) {
        validCharacters += numbers;
        validCharacters += numbers;
      }

      if (this.includeSymbols) {
        validCharacters += symbols;
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

  onChangeUseLowercase() {
    this.includeLowercase = !this.includeLowercase;
    this.onGenerate();
  }

  onChangeUseUppercase() {
    this.includeUppercase = !this.includeUppercase;
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
