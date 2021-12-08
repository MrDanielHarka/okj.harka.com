import { Component, ViewChild } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("text") textInput: any;

  randomText = lorem.sentence();
  enteredText = "";

  onInput(value: string) {
    this.enteredText = value;
  }

  onReset() {
    this.randomText = lorem.sentence();
    this.enteredText = "";
    this.textInput.nativeElement.value = "";
  }

  compareLetters(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return "pendingLetter";
    }

    return randomLetter === enteredLetter ? "correctLetter" : "wrongLetter";
  }
}
