import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { Test1Component } from './components/container/test1/test1.component';
// import { IndexComponent } from './components/index/index.component';
export const routes: Routes = [
    {
        path:'',
        component: ContainerComponent,
        children:[
            {
                path:'test1',
                component: Test1Component
            }
        ]
    }
];
