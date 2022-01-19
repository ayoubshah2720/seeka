import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './menu/components/country/country.component';
import { DeadlineComponent } from './menu/components/deadline/deadline.component';
import { InstitutionComponent } from './menu/components/institution/institution.component';
import { ScholarshipComponent } from './menu/components/scholarship/scholarship.component';
import { StudyLevelComponent } from './menu/components/study-level/study-level.component';
import { ValidityComponent } from './menu/components/validity/validity.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'scholarship',
    component: ScholarshipComponent
  },
  {
    path:'country',
    component: CountryComponent
  },
  {
    path:'deadline',
    component: DeadlineComponent
  },
  {
    path:'institution',
    component: InstitutionComponent
  },
  {
    path:'studyLevel',
    component: StudyLevelComponent
  },
  {
    path:'validity',
    component: ValidityComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
