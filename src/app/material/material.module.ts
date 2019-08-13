import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatSliderModule,
  MatMenuModule,
  MatInputModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    MaterialComponents
  ], 
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
