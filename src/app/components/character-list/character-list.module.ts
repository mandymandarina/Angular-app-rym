import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { RouterModule } from '@angular/router';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CharacterDetailDialogComponent } from './../character-detail-dialog/character-detail-dialog.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

@NgModule({
  declarations: [CharacterListComponent, CharacterDetailDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,    
    RouterModule.forChild([
      { path: '', component: CharacterListComponent }
    ])
  ]
})
export class CharacterListModule {}
