import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-detail-dialog',
  templateUrl: './character-detail-dialog.component.html',
  styleUrls: ['./character-detail-dialog.component.css']
})
export class CharacterDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

