import { TestBed } from '@angular/core/testing';
import { RickAndMortyService } from './rick-and-morty.service';
import {HttpTestingController } from '@angular/common/http/testing';

describe('RickAndMortyService', () => {
  let service: RickAndMortyService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://rickandmortyapi.com/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [RickAndMortyService],
    });

    service = TestBed.inject(RickAndMortyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch characters', () => {
    const mockResponse = { results: [{ name: 'Rick' }] };

    service.getCharacters().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/character`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch episodes', () => {
    const mockResponse = { results: [{ name: 'Pilot' }] };

    service.getEpisodes().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/episode`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch locations', () => {
    const mockResponse = { results: [{ name: 'Earth (C-137)' }] };

    service.getLocations().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/location`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
