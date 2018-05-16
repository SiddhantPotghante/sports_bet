import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { GamePage } from './../pages/game/game';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { TeamHomePage } from '../pages/team-home/team-home';
import { StandingsPage } from '../pages/standings/standings';

@NgModule({
  declarations: [
    MyApp,
   MyTeamsPage,
   GamePage,
   TeamsPage,
   TeamDetailPage,
   TournamentsPage,
   TeamHomePage,
   StandingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   MyTeamsPage,
   GamePage,
   TeamsPage,
   TeamDetailPage,
   TournamentsPage,
   TeamHomePage,
   StandingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
