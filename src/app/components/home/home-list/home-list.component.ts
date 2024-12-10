import { Component } from '@angular/core';
import { NewAnimalModalComponent } from '../../modal/new-animal-modal/new-animal-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss'
})
export class HomeListComponent {
  constructor(public dialog: MatDialog) {}

  openNewAnimalModal(): void {
    this.dialog.open(NewAnimalModalComponent, {
      width: '42rem',
    });
  }
}
