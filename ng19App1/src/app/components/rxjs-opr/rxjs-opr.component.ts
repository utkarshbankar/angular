import { Component, inject, OnInit } from '@angular/core';
import { RxjsApiService } from '../../services/rxjs-api.service';
import { catchError, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-opr',
  imports: [],
  templateUrl: './rxjs-opr.component.html',
  styleUrl: './rxjs-opr.component.scss'
})
export class RxjsOprComponent implements OnInit {

  openApiService = inject(RxjsApiService);
  posts:any = [];

  ngOnInit(): void {
    // Merge map - it will do api calls in parallel
    this.openApiService.getUsers().pipe(
      mergeMap( users => users.slice(0,5)),
      mergeMap( (user:any) => this.openApiService.getPostsByUser(user.id).pipe(
        catchError( err => {
          console.log('error while loading the posts');
          return of([]);
        })
      ))
    ).subscribe( post => this.posts = post);
  }
  
}
