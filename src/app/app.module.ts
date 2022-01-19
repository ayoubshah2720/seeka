import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UniversityMainComponent } from './university-main/university-main.component';
import { ScholarshipComponent } from './menu/components/scholarship/scholarship.component';
import { CountryComponent } from './menu/components/country/country.component';
import { DeadlineComponent } from './menu/components/deadline/deadline.component';
import { InstitutionComponent } from './menu/components/institution/institution.component';
import { StudyLevelComponent } from './menu/components/study-level/study-level.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ValidityComponent } from './menu/components/validity/validity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    UniversityMainComponent,
    ScholarshipComponent,
    CountryComponent,
    DeadlineComponent,
    InstitutionComponent,
    StudyLevelComponent,
    ValidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
