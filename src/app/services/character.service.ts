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
export class CharacterService {

  constructor(private http: HttpClient) { }
  // Method to get characters per page in the service
  getTopRatedCharacters(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrlApi}/?page=${page}`
    );
  }
  // Method to obtain details of each character
  getCharacterDetails(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.baseUrlApi}/${id}`
    );
  }
}
