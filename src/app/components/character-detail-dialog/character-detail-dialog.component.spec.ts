import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CharacterDetailDialogComponent } from './character-detail-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CharacterDetailDialogComponent', () => {
  let component: CharacterDetailDialogComponent;
  let fixture: ComponentFixture<CharacterDetailDialogComponent>;

  const mockData = {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterDetailDialogComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
