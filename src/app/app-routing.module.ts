import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandwichesComponent } from './components/sandwiches/sandwiches.component';

const appRoutes: Routes = [
   { path: 'sandwiches', component: SandwichesComponent }
]

@NgModule({
   declarations: [],
   imports: [RouterModule.forRoot(appRoutes)],
   providers: [],
   bootstrap: [],
   exports: [RouterModule]
})

export class AppRoutingModule { }