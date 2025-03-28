import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodesComponent } from './episodes.component';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { of } from 'rxjs';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;
  let mockService: jasmine.SpyObj<RickAndMortyService>;

  const mockEpisodes = {
    results: [
      { name: 'Pilot', episode: 'S01E01', air_date: 'December 2, 2013' },
      { name: 'Lawnmower Dog', episode: 'S01E02', air_date: 'December 9, 2013' }
    ]
  };

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('RickAndMortyService', ['getEpisodes']);
    mockService.getEpisodes.and.returnValue(of(mockEpisodes));

    await TestBed.configureTestingModule({
      declarations: [EpisodesComponent],
      providers: [
        { provide: RickAndMortyService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load episodes from the service', () => {
    expect(mockService.getEpisodes).toHaveBeenCalled();
    expect(component.episodes.length).toBe(2);
    expect(component.episodes[0].name).toBe('Pilot');
  });
});
