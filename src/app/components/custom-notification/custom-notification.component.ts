import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.scss']
})
export class CustomNotificationComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; body: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
