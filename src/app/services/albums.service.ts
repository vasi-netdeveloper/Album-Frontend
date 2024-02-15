import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private baseApiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getPhotoList(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.baseApiUrl + '/photos?albumId=3');
  }


}
