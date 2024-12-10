import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditAnimalModalComponent } from '../../components/modal/edit-animal-modal/edit-animal-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details-screen',
  templateUrl: './details-screen.component.html',
  styleUrl: './details-screen.component.scss'
})
export class DetailsScreenComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('ID da linha clicada:', this.id);
    });
  }

  openNewAnimalModal(): void {
    this.dialog.open(EditAnimalModalComponent, {
      width: '40rem',
    });
  }
}
