import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { IUsersData } from '../common/interfaces'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public searchPage = new BehaviorSubject(0)

  public perPageValue = 20

  constructor(private _http: HttpClient) { }

  public getUsers(filters: {[key: string]: string | number | boolean}): Observable<IUsersData> {
    let params = new HttpParams();

    for (let key in filters) {
      if (filters.hasOwnProperty(key) && filters[key] !== undefined) {
        params = params.set(key, filters[key]);
      }
    }

    return this._http.get<IUsersData>(`https://api.github.com/search/users`, { params });
  }
}
