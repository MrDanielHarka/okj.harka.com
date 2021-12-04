import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	title = "Material Kártyák";

	posts = [
		{
			name: "József",
			personImage: "person1",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus placeat vero voluptatum. Recusandae fugiat eveniet voluptatum pariatur praesentium vel nostrum nobis cum, sequi.",
			website: "https://bjozsef02.github.io"
		},
		{
			name: "Sára",
			personImage: "person2",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus placeat vero voluptatum. Recusandae fugiat eveniet voluptatum pariatur praesentium vel nostrum nobis cum, sequi.",
			website: "https://sara.harka.com"
		},
		{
			name: "Dániel",
			personImage: "person3",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus placeat vero voluptatum. Recusandae fugiat eveniet voluptatum pariatur praesentium vel nostrum nobis cum, sequi.",
			website: "https://daniel.harka.com"
		}
	];
}
