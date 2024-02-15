import { Component, OnInit, ViewChild } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  photos: Photo[] = [];
  displayedColumns: string[] = ['id', 'title'];
  
  constructor(private albumService : AlbumsService) { }

  ngOnInit(): void {
    this.albumService.getPhotoList()
    .subscribe({
      next: (success) => {
        this.photos = success;
        //this.dataSource = new MatTableDataSource<Photo>(this.photos);
      },
      error: (err) => {
        console.log(err);
      }
    });
    }

}
