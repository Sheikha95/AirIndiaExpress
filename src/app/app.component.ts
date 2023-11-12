import { Component } from '@angular/core';









@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AirIndiaExpress';

  checked: boolean = false; // Initialize with an appropriate value

  date: Date = new Date(); // Initialize with a valid Date object

 // selectedCountry: any;
  countries = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'UK' },
    // Add more countries as needed
  ];

  //countriess = ['Oman','US', 'UK', 'China', 'Russia', 'Germany', 'India', 'Italy', 'Canada'];

  countriess = ['Oman','US', 'UK', 'China', 'Russia', 'Germany', 'India', 'Italy', 'Canada'];
  selectedCountry: any; // To store the selected country



  switchOpen = false;
  showTextBox = false;
 
  onSwitchChange() {
     this.showTextBox = this.switchOpen;
  }



  

  
}



