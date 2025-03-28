import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.component.html',
    styleUrls: ['./episodes.component.css'],
    standalone: false
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];

  constructor(private apiService: RickAndMortyService) {}

  ngOnInit(): void {
    this.apiService.getEpisodes().subscribe((data) => {
      this.episodes = data.results;
    });
  }
}

