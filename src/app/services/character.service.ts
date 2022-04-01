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

  getTopRatedCharacters(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrlApi}/?page=${page}`
    );
  }
  getCharacterDetails(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.baseUrlApi}/${id}`
    );
  }
}
