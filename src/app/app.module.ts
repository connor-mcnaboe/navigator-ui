import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MissionFormComponent } from './mission/components/mission-form/mission-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlyoutComponent } from './layout/flyout/flyout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { WorldViewComponent } from './mission/components/world-view/world-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionFormComponent,
    FlyoutComponent,
    WorldViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
