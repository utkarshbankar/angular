import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from "./test1/test1.component";
import { NgTemplateOutlet } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { CartComponent } from "../cart/cart.component";
import { AuthComponent } from '../auth/auth.component';
import { FormsComponent } from '../forms/forms.component';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { RxjsOprComponent } from "../rxjs-opr/rxjs-opr.component";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-container',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, FormsComponent, ReactiveFormsComponent, Test2Component, Test1Component, NgTemplateOutlet, TodoComponent, CartComponent, AuthComponent, RxjsOprComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  textName = '';
  textNameTwo= '';

  constructor(){
    console.log('[containerComp] inside the : constructor');
  }

  ngOnInit(): void {
    console.log('[containerComp] inside the : OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[containerComp] inside the : OnChange');
  }

  ngDoCheck(): void {
    console.log('[containerComp] inside the : DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('[containerComp] inside the : AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('[containerComp] inside the : AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('[containerComp] inside the : AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('[containerComp] inside the : AfterViewChecked');
  }

  ClickToTest(){
    this.textNameTwo = 'testValue'
  }

}
