import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';

import {MainHorizontalSearchComponent} from './main-layout/main-horizontal-search/main-horizontal-search.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainHorizontalMenuComponent} from './main-layout/main-horizontal-menu/main-horizontal-menu.component';

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
    MatButtonModule, 
    MatCheckboxModule, 
    MatSlideToggleModule,
    MatSidenavModule, 
    MatSliderModule, 
    MatMenuModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
