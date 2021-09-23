import { Component, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  name = 'Angular ' + VERSION.major;

  public counter = 0;
  public data: any;

  updateCounter = () => {
    this.counter++;
  };

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
    });
  }
}
