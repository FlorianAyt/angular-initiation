import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import { PostComponent } from './post/post.component';
import { AppareilService} from './services/appareil.service';
import {PostService} from './services/post.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent},
  { path: 'appareils/:id', component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: AppareilViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    PostComponent,
    AuthComponent,
    AppareilViewComponent,
    PostViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    PostService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
