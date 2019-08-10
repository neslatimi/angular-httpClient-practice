import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = 'http://localhost:3000/user';
  list: User[] ;

  constructor(
    private http: HttpClient
  ) {
    
   }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }
  create(user:User):Observable<User>{
    return this.http.post<User>(this.jsonUrl,user)
  }
  remove(id:number):Observable<User>{
    return this.http.delete<User>(`${this.jsonUrl}/${id}`)
  }
  update(user:User):Observable<User>{
    
    return this.http.put<User>(`${this.jsonUrl}/${user.id}`,user);
  }
  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.jsonUrl}/${id}`);
  }
/*
  get(id: number): User {
    return this.list.filter( user => user.id == id )[0] || new User();
  }*/
  
  edit(user, id): Observable<User[]> {
    return this.http.put<User[]>(`${this.jsonUrl}/${id}`, user);
  }
  

}
