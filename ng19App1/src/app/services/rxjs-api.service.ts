import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RxjsApiService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPostsByUser(userId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getRandomDogImage(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }

  searchRickAndMortyCharacter(name: string): Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
  }

}
