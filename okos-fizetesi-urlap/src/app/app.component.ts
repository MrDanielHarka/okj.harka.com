import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	name: string;
	amount: number;
	date: string;
	state: string = "start";
	disableFields: boolean;
	dashboardClass: string;
	message: string;
	roundAmount: number;
	minDate = new Date().toISOString().slice(0, 10);

	onNameChange(value: string) {
		this.name = value;
	}

	onAmountChange(value: string) {
		this.amount = parseFloat(value);
		// this.roundAmount = Math.floor(this.amount);
		// this.amount = parseInt(this.amount, 10);
	}

	onDateChange(value: string) {
		this.date = value;
	}

	onButtonClick() {
		// this.hide = true;
		this.state = "continue";
		this.disableFields = true;

		setTimeout(() => {
			this.state = "finish";
			this.message = `Fatal error!`;
			this.dashboardClass = "red";
		}, 5000);
		setTimeout(() => {
			this.message = `Fatal error!`;
			this.dashboardClass = "white";
		}, 5500);
		setTimeout(() => {
			this.message = `Fatal error!`;
			this.dashboardClass = "red";
		}, 5750);
		setTimeout(() => {
			this.message = `Fatal error!`;
			this.dashboardClass = "white";
		}, 6000);
		setTimeout(() => {
			this.message = `Fatal error!`;
			this.dashboardClass = "red";
		}, 6250);
		setTimeout(() => {
			this.message = `Utalási hiba!`;
		}, 8000);
		setTimeout(() => {
			this.message = `Alapértelmezett kedvezményezett és dátum visszaállítva.`;
			this.dashboardClass = "green";
			this.name = "Harka Sára";
			this.date = this.minDate;
		}, 10000);
		setTimeout(() => {
			setInterval(() => {
				this.amount *= 1.005;
				this.dashboardClass = "black";
				this.message = `Azonnali átutalás folyamatban Harka Sára részére ${Math.floor(
					this.amount
				).toLocaleString()} Ft összegben.`;
			}, 10);
		}, 15000);
	}
}
