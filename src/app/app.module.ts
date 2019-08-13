import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MainHorizontalSearchComponent} from './main-layout/main-horizontal-search/main-horizontal-search.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainHorizontalMenuComponent} from './main-layout/main-horizontal-menu/main-horizontal-menu.component';
import {MaterialModule} from './material/material.module';
import { MaterielNavComponent } from './main-layout/materiel-nav/materiel-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './main-layout/navigation/navigation.component';
import { TableComponent } from './main-layout/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Card01Component } from './Tests/card01/card01.component';

import { DashboardComponent } from './modules/main/components/dashboard/dashboard.component';
import { ScheduleComponent } from './modules/main/components/schedule/schedule.component';
import { PeopleComponent } from './modules/main/components/people/people.component';
import { AboutComponent } from './modules/main/components/about/about.component';
import { SettingsComponent } from './modules/main/components/settings/settings.component';
import { ReportbugComponent } from './modules/main/components/reportbug/reportbug.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainHorizontalMenuComponent,
    MainHorizontalSearchComponent,
    MaterielNavComponent,
    NavigationComponent,
    TableComponent,
    Card01Component,
    DashboardComponent,
    ScheduleComponent,
    PeopleComponent,
    AboutComponent,
    SettingsComponent,
    ReportbugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
