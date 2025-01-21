import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { Test1Component } from '../test1/test1.component';

@Component({
  selector: 'app-test2',
  imports: [],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss'
})
export class Test2Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input('testTwo') testProp2: any;

  @ContentChildren('trvTest2') contentVal! :QueryList<ElementRef>;
  @ContentChild('trvTest1') test1Comp! : Test1Component;

  constructor(){
    // console.log('[Test2Comp] inside the : constructor');
  }

  ngOnInit(): void {
    // console.log('[Test2Comp] inside the : OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('[Test2Comp] inside the : OnChange');
  }

  ngDoCheck(): void {
    // console.log('[Test2Comp] inside the : DoCheck');
  }

  ngAfterContentInit(): void {
    console.log("this.contentVal", this.contentVal);
   
    this.contentVal
    this.contentVal.forEach( (elm, ind) => {
      elm.nativeElement.style.color ='red';
      elm.nativeElement.style.fontSize ='30px';
      elm.nativeElement.innerText = `To be updated from child of contented project ${ind+1}`;
      return elm;
    });

    console.log("trvTest1", this.test1Comp);
    
    // console.log('[Test2Comp] inside the : AfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('[Test2Comp] inside the : AfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('[Test2Comp] inside the : AfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('[Test2Comp] inside the : AfterViewChecked');
  }

}
