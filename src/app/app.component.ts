import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./components/index/index.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  {
  title = 'ng19App1';

  constructor(){
      console.log('[AppComp] inside the : constructor');
    }
  
    ngOnInit(): void {
      console.log('[AppComp] inside the : OnInit');
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('[AppComp] inside the : OnChange');
    }
    
    ngDoCheck(): void {
      console.log('[AppComp] inside the : DoCheck');
    }
  
    ngAfterContentInit(): void {
      console.log('[AppComp] inside the : AfterContentInit');
    }
  
    ngAfterContentChecked(): void {
      console.log('[AppComp] inside the : AfterContentChecked');
    }
  
    ngAfterViewInit(): void {
      console.log('[AppComp] inside the : AfterViewInit');
    }
  
    ngAfterViewChecked(): void {
      console.log('[AppComp] inside the : AfterViewChecked');
    }

}
