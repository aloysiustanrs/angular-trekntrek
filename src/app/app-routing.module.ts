import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'mobile', component: MobileComponent },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
