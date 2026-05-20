import { Component } from "@angular/core";
import { Home } from "./components/home/home";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [Home, RouterLink, RouterOutlet],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  title = "homes";
}
