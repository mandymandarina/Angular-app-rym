import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let mockApi: jasmine.SpyObj<RickAndMortyService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  const mockCharacterList = {
    results: [
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image: '',
        gender: 'Male'
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        image: '',
        gender: 'Male'
      }
    ]
  };

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('RickAndMortyService', ['getCharacters']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [CharacterListComponent],
      imports: [MatPaginatorModule, MatTableModule, BrowserAnimationsModule],
      providers: [
        { provide: RickAndMortyService, useValue: mockApi },
        { provide: MatDialog, useValue: mockDialog }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCharacters and load dataSource', () => {
    mockApi.getCharacters.and.returnValue(of(mockCharacterList));

    fixture.detectChanges(); // Llama ngOnInit

    expect(mockApi.getCharacters).toHaveBeenCalled();
    expect(component.dataSource.data.length).toBe(2);
    expect(component.loading).toBeFalse();
  });

  it('should filter characters with applyFilter()', () => {
    mockApi.getCharacters.and.returnValue(of(mockCharacterList));
    fixture.detectChanges();

    const event = {
      target: { value: 'rick' }
    } as unknown as Event;

    component.applyFilter(event);
    expect(component.dataSource.filter).toBe('rick');
  });

  it('should open dialog with character data', () => {
    const character = mockCharacterList.results[0];
    component.openDetails(character);

    expect(mockDialog.open).toHaveBeenCalledWith(jasmine.any(Function), {
      data: character,
      width: '400px'
    });
  });
});
