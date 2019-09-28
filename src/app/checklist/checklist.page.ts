import { Component, OnInit } from '@angular/core';
import { AlertController, IonList, NavController } from '@ionic/angular';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  title = 'Checklist 123';
  item = {
    checked: false
  };

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    console.log('addItem');
  }

  toggleItem(item) {
    console.log('itemToggle', item);
  }

  renameItem(item) {
    console.log('renameItem', item);
  }

  removeItem(item) {
    console.log('removeItem', item);
  }

}
