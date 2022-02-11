import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditionComponent } from './edition/edition.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { HttpClientModule } from '@angular/common/http';
import { PreorderBonusComponent } from './edition/preorder-bonus/preorder-bonus.component';

@NgModule({
  declarations: [
    AppComponent,
    EditionComponent,
    RequirementsComponent,
    PreorderBonusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
