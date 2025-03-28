import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDetailDialogComponent } from '../character-detail-dialog/character-detail-dialog.component';
import { log } from 'console';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'status', 'species', 'actions'];
  dataSource = new MatTableDataSource<any>();
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: RickAndMortyService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.api.getCharacters().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.results);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
 
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.name.toLowerCase().includes(filter);
    };
      this.loading = false;
    });

    this.api.getCharacters().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
    
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const name = data.name.toLowerCase();
        const species = data.species.toLowerCase();
        const status = data.status.toLowerCase();
        return name.includes(filter) || species.includes(filter) || status.includes(filter);
      };
    
      this.loading = false;
    });
    
    
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  

  openDetails(character: any): void {
    console.log('abriendo modal')
    this.dialog.open(CharacterDetailDialogComponent, {
      data: character,
      width: '400px',
    });
  }

}
