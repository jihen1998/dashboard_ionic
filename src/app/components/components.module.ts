import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ScheduleAndHolidaysManagementComponent } from './schedule-and-holidays-management/schedule-and-holidays-management.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditHolidayFormComponent } from './edit-holiday-form/edit-holiday-form.component';
import { OffreManagementComponent } from './offre-management/offre-management.component';
import { PlatOfOffreComponent } from './plat-of-offre/plat-of-offre.component';
import { AffectPlatToOffreComponentComponent } from './affect-plat-to-offre-component/affect-plat-to-offre-component.component';
import { OffreFormComponent } from './offre-form/offre-form.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {ChartsModule} from 'ng2-charts';
import { PrinterConfigComponent } from './printer-config/printer-config.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        MatExpansionModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        IonicModule
    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ScheduleAndHolidaysManagementComponent,
    EditHolidayFormComponent,
    OffreManagementComponent,
    PlatOfOffreComponent,
    AffectPlatToOffreComponentComponent,
    OffreFormComponent,
    UserManagementComponent,
    StatisticsComponent,
    PrinterConfigComponent,
    AllTicketsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
