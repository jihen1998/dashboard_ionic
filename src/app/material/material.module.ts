import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';

const MaterialComponent = [
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSortModule,
  MatCheckboxModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [],
  imports: [
   MaterialComponent
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
