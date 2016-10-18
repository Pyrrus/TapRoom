import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Maz Kanata Keg list</h1>
    <div [hidden] = "!showList">
      <keg-list
        [childKegList]="masterkegList"
        (clickSender)="showDetails($event)"
       ></keg-list>
    </div>
    <div [hidden] = "!showEdit">
      <edit-keg
        [childSelectedKeg]="selectedKeg"
        (doneClickedSender)="finishedEditing()"
      ></edit-keg>
    </div>
    <div [hidden]= "!showNew">
      <new-keg
        (newKegSender)="addKeg($event)"
      ></new-keg>
    </div>
    <button [hidden] = "!showList" (click)="add()">Add Keg</button>
  </div>
  `
})

export class AppComponent {
  public masterkegList: Keg[] = [
      new Keg("Lager", "Rainer", 2, 2),
  ];
  showList = true;
  showEdit = false;
  showNew = false;
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.showList = false;
    this.showEdit = true;
    this.showNew = false;
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.showList = true;
    this.showEdit = false;
    this.showNew = false;
    this.selectedKeg = null;
  }
  addKeg(newKegFromChild: Keg) {
    this.showList = true;
    this.showEdit = false;
    this.showNew = false;
    this.masterkegList.push(newKegFromChild);
  }

  add() {
    this.showList = false;
    this.showEdit = false;
    this.showNew = true;
  }
}
