import { Component, OnInit } from '@angular/core';
import { AlertController, IonList, NavController } from '@ionic/angular';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.page.html',
  styleUrls: ['./checklists.page.scss'],
})
export class ChecklistsPage implements OnInit {

  title = 'TITLE GOES HERE';
  numItems = 0;

  constructor() { }

  ngOnInit() {
  }

  addChecklist() {
    console.log('addChecklist');
  }

  renameChecklist(checklist) {
    console.log('rename: ', checklist);
  }

  removeChecklist(checklist) {
    console.log('remove: ', checklist);
  }

}
