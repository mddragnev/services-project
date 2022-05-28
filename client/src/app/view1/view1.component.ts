import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../services/travel-app.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public travelAppDestinations: any = null;

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('Destinations').subscribe(data => this.travelAppDestinations = data);
  }
}
