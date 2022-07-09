import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'http://uxdeve82-001-site6.itempurl.com/api/Members';

  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(this.url);
  }

}
