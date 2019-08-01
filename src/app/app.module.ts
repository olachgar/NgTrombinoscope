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
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainHorizontalMenuComponent,
    MainHorizontalSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
