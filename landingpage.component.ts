import { Component } from '@angular/core';
import { VisitcampsitesComponent } from "../visitcampsites/visitcampsites.component";
import { OurservicesComponent } from "../ourservices/ourservices.component";
import { CustomerreviewsComponent } from "../customerreviews/customerreviews.component";

@Component({
  selector: 'app-landingpage',
  imports: [VisitcampsitesComponent, OurservicesComponent, CustomerreviewsComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
