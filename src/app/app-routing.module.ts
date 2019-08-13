import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/main/components/dashboard/dashboard.component';
import { ScheduleComponent } from './modules/main/components/schedule/schedule.component';
import { PeopleComponent } from './modules/main/components/people/people.component';
import { AboutComponent } from './modules/main/components/about/about.component';
import { SettingsComponent } from './modules/main/components/settings/settings.component';
import { ReportbugComponent } from './modules/main/components/reportbug/reportbug.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'report-bug', component: ReportbugComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
