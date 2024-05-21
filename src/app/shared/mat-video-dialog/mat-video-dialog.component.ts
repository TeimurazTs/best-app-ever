import {AfterViewInit, Component, Inject,  ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-mat-video-dialog',
  standalone: true,
  imports: [
    MatDialogContent
  ],
  templateUrl: './mat-video-dialog.component.html',
  styleUrl: './mat-video-dialog.component.css'
})
export class MatVideoDialogComponent {
  constructor(public dialogRef: MatDialogRef<MatVideoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  videoEnd() {
    this.dialogRef.close();
  }
}
