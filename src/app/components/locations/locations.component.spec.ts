import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationsComponent } from './locations.component';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { of } from 'rxjs';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;
  let mockService: jasmine.SpyObj<RickAndMortyService>;

  const mockLocations = {
    results: [
      { name: 'Earth (C-137)', type: 'Planet', dimension: 'Dimension C-137' },
      { name: 'Abadango', type: 'Cluster', dimension: 'unknown' }
    ]
  };

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('RickAndMortyService', ['getLocations']);
    mockService.getLocations.and.returnValue(of(mockLocations));

    await TestBed.configureTestingModule({
      declarations: [LocationsComponent],
      providers: [{ provide: RickAndMortyService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });


});
