import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingLocationInfo } from "src/app/interfaces/housinglocation";
import { Housing } from "src/app/services/housing";
@Component({
  selector: "app-details",
  templateUrl: "./details.html",
  styleUrls: ["./details.css"],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
