import { Component, input } from "@angular/core";
import { HousingLocationInfo } from "../../interfaces/housinglocation";

@Component({
  selector: "app-housing-location",
  imports: [],
  templateUrl: "./housing-location.html",
  styleUrl: "./housing-locations.css",
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
