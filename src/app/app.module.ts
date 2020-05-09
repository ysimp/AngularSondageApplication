import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiServiceService} from './services/api-service.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListSondageComponent } from './sondage/list-sondage/list-sondage.component';
import { NewSondageComponent } from './sondage/new-sondage/new-sondage.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from './services/auth.service';
import {SondageService} from './services/sondage.service';
import { DetailSondageComponent } from './sondage/detail-sondage/detail-sondage.component';
import { EditSondageComponent } from './sondage/edit-sondage/edit-sondage.component';
import { ParticiperComponent } from './sondage/participer/participer.component';
import { ParticipeComponent } from './sondage/participe/participe.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListParticipantComponent } from './participant/list-participant/list-participant.component';
import { DetailParticipantComponent } from './participant/detail-participant/detail-participant.component';
import {ParticipantService} from './services/participant.service';
import { DetailUserComponent } from './user/detail-user/detail-user.component';

const  appRoutes: Routes = [
  { path: 'auth/signup', component : SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  {path: 'users', component : ListUserComponent },
  {path: 'new-user', component: NewUserComponent},
  {path: 'sondages', component : ListSondageComponent },
  {path: 'new-sondage', component: NewSondageComponent},
  {path: 'detail-sondage/:id', component: DetailSondageComponent},
  {path: 'edit-sondage/:idSond', component: EditSondageComponent},
  // {path: 'participer/:id', component: ParticiperComponent},
  {path: 'participe/:id', component: ParticipeComponent},
  {path: 'participants', component : ListParticipantComponent },
  {path: '', component: AccueilComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ListSondageComponent,
    NewSondageComponent,
    ListUserComponent,
    NewUserComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    DetailSondageComponent,
    EditSondageComponent,
    ParticiperComponent,
    ParticipeComponent,
    FourOhFourComponent,
    AccueilComponent,
    ListParticipantComponent,
    DetailParticipantComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    ApiServiceService,
    AuthService,
    SondageService,
    ParticipantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
