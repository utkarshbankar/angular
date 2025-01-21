import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../store/auth/auth.model';
import { Store } from '@ngrx/store';
import { getAllUser } from '../../store/auth/auth.actions';
import { selectAllUser } from '../../store/auth/auth.selectors';
import { AppState } from '../../store/state';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [NgFor],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  users$: Observable<User[]>;
  usersArray : User[] = [];

  constructor(private store:Store<AppState>){
    this.users$ = this.store.select(selectAllUser);
    this.loadTodos();
  }

  ngOnInit(): void {
    this.users$.subscribe((data) => {
      console.log('Auth data:', data);
      this.usersArray = data; // Store data locally if needed
    });
  }
  
  loadTodos() {
        this.store.dispatch(getAllUser());
  }

}

