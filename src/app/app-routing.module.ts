import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';

const routes: Routes = [
  { path: 'screen1', component: Screen1Component },
  { path: 'screen2', component: Screen2Component },
  { path: 'screen3', component: Screen3Component },
  { path: '', redirectTo: '/screen1', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

