import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { CcaComponent } from './cca/cca.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'cca', component: CcaComponent },
    { path: 'mobile', component: MobileComponent },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
