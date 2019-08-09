import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }
  create(user:User):Observable<User>{
    return this.http.post<User>(this.jsonUrl,user)
  }
  remove(id:number):Observable<User>{
    return this.http.delete<User>(`${this.jsonUrl}/${id}`)
  }
}
