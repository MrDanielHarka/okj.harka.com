import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  senderUser: number = 0;
  receiverUser: number;
  transferAmount: number = null;
  transferDone: boolean = false;
  message: string = "";
  showModule: string = "users";

  users = [
    {
      name: "József",
      balance: 500_000,
    },
    {
      name: "Sára",
      balance: 400_000,
    },
    {
      name: "Dániel",
      balance: 300_000,
    },
  ];

  transactions = [];

  onGoToHomepage() {
    this.receiverUser = null;
    this.transferAmount = 0;
    this.senderUser = null;

    this.showModule = "users";
  }

  onSelectSender(userIndex: number) {
    this.senderUser = userIndex;
    this.showModule = "transfer";
    this.transferDone = false;

    this.transferAmount = null;
  }

  onSelectReceiver(event: any) {
    this.receiverUser = event.target.value;
  }

  onAmountChange(value: string) {
    this.transferAmount = parseFloat(value);
  }

  onTransferButtonClick() {
    this.transferDone = true;
    this.users[this.senderUser].balance -= this.transferAmount;
    this.users[this.receiverUser].balance += this.transferAmount;
  }
}
