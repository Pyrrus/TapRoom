import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let currentKeg of childKegList">

      <h3>Name of the drink: {{ currentKeg.name }}</h3>
      <h3>Pints: {{ currentKeg.pints }}</h3>
      <div *ngIf="currentKeg.price >= 5">
        <h3 style='color:red'>Cost: {{ currentKeg.price }}</h3>
      </div>
      <div *ngIf="currentKeg.price < 5">
        <h3 style='color:green'>Cost: {{ currentKeg.price }}</h3>
      </div>
      <div *ngIf="currentKeg.ABV >= 8">
        <h3 style='color:tan'>Alcohol Content: {{ currentKeg.ABV }}%</h3>
      </div>
      <div *ngIf="currentKeg.ABV < 8">
        <h3 style='color:limegreen'>Alcohol Content: {{ currentKeg.ABV }}%</h3>
      </div>
      <button (click)="orderButtonHasBeenClicked(currentKeg)">Order</button>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  orderButtonHasBeenClicked(kegToOrder: Keg) {
    kegToOrder.pints--;
  }
}
