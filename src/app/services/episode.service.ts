import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  totalPages: number;
  totalResults: number;
}
@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }
// Method to get episodes per page in the service
  getTopRatedEpisodes(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.episodes}/?page=${page}`
    );
  }
  // Method to obtain details of each episode
  getEpisodeDetails(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.episodes}/${id}`
    );
  }
}
