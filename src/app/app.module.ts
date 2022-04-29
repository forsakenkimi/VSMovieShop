import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { JwtTokenInterceptor } from './core/interceptors/jwt-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:JwtTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
