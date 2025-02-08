import { Component, inject, OnInit } from '@angular/core';
import { RxjsApiService } from '../../services/rxjs-api.service';
import { catchError, combineLatest, concatMap, delay, map, mergeMap, of, switchMap } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-rxjs-opr',
  imports: [NgFor, NgIf],
  templateUrl: './rxjs-opr.component.html',
  styleUrl: './rxjs-opr.component.scss'
})
export class RxjsOprComponent implements OnInit {

  openApiService = inject(RxjsApiService);
  posts:any = [];
  users:any = [];
  dogs:any ;
  rickyChars: any;

  ngOnInit(): void {
    // Merge map - it will do api calls in parallel, and returns response in sometime
    this.openApiService.getUsers().pipe(
      mergeMap( users => users.slice(0,3)),
      mergeMap( (user:any) => this.openApiService.getPostsByUser(user.id).pipe(
        delay(2000),
        catchError( err => {
          console.log('error while loading the posts');
          return of([]);
        })
      ))
    ).subscribe( post => this.posts.push(...this.posts, ...post));

    // this.onSwitchMap();
    // this.applyConcatMap();
    this.useCombineLatest();
  }
 
  onSwitchMap(){
    // it will cancel all other request made earlier and process the latest one.
    this.openApiService.getUsers().pipe(
      switchMap( (elm:any) => {
          if( elm.length > 0){
            const userId = elm.map(
              (user: any) => ({
                ...user,
                id: user.id + 100
              })); 
            return this.openApiService.getPostsByUser(userId[0].id).pipe(
              catchError( (err:any) => {
                console.log("err", err);
                return of([]);
              })
            );
          } else{
            return of([]);
          }
        }
      )
    ).subscribe( item => {
      console.log(item);
      this.users = item;
    });
  }

  applyConcatMap(){
    // concatMap process the requests in sequence one after another and return the response 
    this.openApiService.getUsers().pipe(
      concatMap( elm => elm.slice(0,5)),
      concatMap( (userpost : any) => 
        this.openApiService.getPostsByUser(userpost.id).pipe(
          map(posts => posts.map((post:any) => ({ ...post, id: post.id + 100 }))),
          catchError( err => of([]))
        )
      )
    ).subscribe(
      
      data => {
        console.log(data),
        this.users = [...this.users,...data]
      })
  }
  
  useCombineLatest(){

    combineLatest([
      this.openApiService.getRandomDogImage().pipe(
        catchError(err => {
          console.log(err);
          return of({message:''})
        })
      ),
      this.openApiService.searchRickAndMortyCharacter('Rick').pipe(
        catchError(err => {
          console.log(err);
          return of({results:[]});
        })
      )
    ]).subscribe(
      ([ dog, char]) => {
        console.log("data", dog, char);
        
        this.dogs = dog;
        this.rickyChars = char.results;
      });

  }


}
