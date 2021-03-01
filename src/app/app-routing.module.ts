import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movie-details/:id', component: DetailMovieComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
    exports: [RouterModule]
})
export class AppRoutingModule { }