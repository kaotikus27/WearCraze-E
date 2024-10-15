import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProductComponent } from './components/pages/product/product.component';
import { CollectionsComponent } from './components/pages/collections/collections.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';

export const routes: Routes = [
   {
    path:'',
    component:DashboardComponent
   },
   {
    path:'Product',
    loadComponent:() => import('./components/pages/product/product.component').then((c)=> ProductComponent)
   },
   {
    path:'Collection',
    component:CollectionsComponent
   },
   {
    path:'ContactUs',
    component:ContactUsComponent
   }
];
