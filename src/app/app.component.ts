import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ChecklistDataService } from './services/checklist-data.service';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private dataService: ChecklistDataService) {}

  ngOnInit() {
    this.dataService.load();

    SplashScreen.hide().catch(err => {
      console.warn(err);
    });

    StatusBar.hide().catch(err => {
      console.warn(err);
    });
  }
}
