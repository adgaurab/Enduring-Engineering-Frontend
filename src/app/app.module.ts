import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ApiService } from './api.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.component';
import { AddPOSTComponent } from './add-post/add-post.component';
import { UsersComponent } from './users/users.component';
import { MypostComponent } from './mypost/mypost.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetailsComponent,
    NavComponent,
    AccountComponent,
    AddPOSTComponent,
    UsersComponent,
    MypostComponent,
    EditarticleComponent,
    TagListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
