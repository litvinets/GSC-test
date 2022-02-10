import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatTreeModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatDividerModule
  ],
  declarations: [
  ]
})
export class MaterialModule { }