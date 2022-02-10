import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EditionComponent } from './main/edition/edition.component';
import { RequirementsComponent } from './main/requirements/requirements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EditionComponent,
    RequirementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
