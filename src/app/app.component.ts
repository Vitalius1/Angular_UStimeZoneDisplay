import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'US Time Zone Display';
  selected: string = "";
  time: string;
  
  getTime(zone: string) {
    if (zone === "PST") {
      this.selected = "PST";
      this.time = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    } else if (zone === "MST") {
      this.selected = "MST"
      this.time = new Date().toLocaleString("en-US", {timeZone: "America/Boise"});
    } else if (zone === "CST") {
      this.selected = "CST"
      this.time = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
    } else if (zone === "EST") {
      this.selected = "EST"
      this.time = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    }
  };

  clear() {
    this.selected = "";
    this.time = "";
  };

}
