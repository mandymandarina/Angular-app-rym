import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css'],
    standalone: false
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];

  constructor(private apiService: RickAndMortyService) {}

  ngOnInit(): void {
    this.apiService.getLocations().subscribe((data) => {
      this.locations = data.results;
    });
  }
}
