import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { debug } from 'console';
import { IgxCardComponent } from 'igniteui-angular';
import { TravelAppService } from '../services/travel-app.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  @ViewChild('languageSpan') public lang: any;
  @ViewChildren(IgxCardComponent, {read: ElementRef})
  public cards!: QueryList<ElementRef>;
  public travelAppDestinations: any = null;

  private language = '';

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('Destinations').subscribe(data => this.travelAppDestinations = data);
  }

  public changeLanguage(event: any) {
    // debugger;
    event.preventDefault();
    const classList = this.lang.nativeElement.classList.value;
    if (classList.includes('bg')) {
      this.language = 'us';
      this.cards.forEach(card => {
        card.nativeElement.querySelector('span').classList.remove('fi-bg');
        card.nativeElement.querySelector('span').classList.add('fi-us');

      });
    } else {
      this.language = 'bg';
      this.cards.forEach(card => {
        card.nativeElement.querySelector('span').classList.remove('fi-us');
        card.nativeElement.querySelector('span').classList.add('fi-bg');

      });
    }
  }
}
