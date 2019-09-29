import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertController, IonList, NavController } from '@ionic/angular';
import { ChecklistDataService } from '../services/checklist-data.service';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.page.html',
  styleUrls: ['./checklists.page.scss'],
})
export class ChecklistsPage implements OnInit {
  @ViewChild(IonList, { static: false}) slidingList: IonList;

  title = 'TITLE GOES HERE';
  numItems = 0;

  constructor(
    public dataService: ChecklistDataService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  addChecklist() {
    this.alertCtrl
      .create({
        header: 'New Checklist',
        message: 'Enter the name of your new checklist below:',
        inputs: [
          {
            type: 'text',
            name: 'name'
          }
        ],
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'Save',
            handler: data => {
              this.dataService.createChecklist(data);
            }
          }
        ]
      })
      .then(prompt => {
        prompt.present();
      });
  }

  renameChecklist(checklist) {
    this.alertCtrl
      .create({
        header: 'Rename Checklist',
        message: 'Enter the new name of this checklist below:',
        inputs: [
          {
            type: 'text',
            name: 'name'
          }
        ],
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'Save',
            handler: data => {
              this.dataService.renameChecklist(checklist, data);
            }
          }
        ]
      })
      .then(prompt => {
        prompt.present();
      });
  }

  removeChecklist(checklist) {
    this.slidingList.closeSlidingItems()
      .then(() => {
        this.dataService.removeChecklist(checklist);
      });
  }
}
