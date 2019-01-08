import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {HomeAlternateComponent} from './home-alternate/home-alternate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '2', component: HomeAlternateComponent },
  { path: 'projects/:project', component: ProjectsComponent, data: {title: 'Projects We\'ve Built'} },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
