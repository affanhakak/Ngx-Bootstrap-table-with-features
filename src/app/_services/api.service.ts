import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://wordle-with-friends.herokuapp.com/mock/player-data';

  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(this.url);
  }

}
