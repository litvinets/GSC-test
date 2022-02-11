import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlexModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditionComponent } from './edition/edition.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { HttpClientModule } from '@angular/common/http';
import { PreorderBonusComponent } from './edition/preorder-bonus/preorder-bonus.component';
import { RequirementsTableComponent } from './shared/components/requirements-table/requirements-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EditionComponent,
    RequirementsComponent,
    PreorderBonusComponent,
    RequirementsTableComponent,
  ],
  imports: [
    BrowserModule,
    FlexModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
