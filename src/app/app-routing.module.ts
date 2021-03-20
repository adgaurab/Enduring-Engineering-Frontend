import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { DetailsComponent } from './details/details.component';
import { AccountComponent } from './account/account.component';
import { AddPOSTComponent } from './add-post/add-post.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth/auth.guard'
import { MypostComponent } from './mypost/mypost.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'post/:id', component: DetailsComponent },
  { path: 'login', component: AccountComponent },
  { path: 'addPost', component: AddPOSTComponent },
  { path: 'editarticle/:id', component: EditarticleComponent },
  { path: 'mypost', component: MypostComponent },
  { path: 'user', component: UsersComponent },
  { path: 'tag-article/:tag', component: TagListComponent },
  { path: 'search/:key', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
