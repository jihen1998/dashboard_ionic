import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {CommandesEnAtenteComponent} from '../../components/commandes-en-atente/commandes-en-atente.component';
import {CommandesEnCoursComponent} from '../../components/commandes-en-cours/commandes-en-cours.component';
import {CommandeTermineComponent} from '../../components/commande-termine/commande-termine.component';
import {CommandesArchivesComponent} from '../../components/commandes-archives/commandes-archives.component';
import {DashboardGuard} from '../../routeGuard/dashboard.guard';
import {IngredientManagementComponent} from '../../components/ingredient-management/ingredient-management.component';
import {ModificateurManagementComponent} from '../../components/modificateur-management/modificateur-management.component';
import {PlatManagementComponent} from '../../components/plat-management/plat-management.component';
import {CategorieManagementComponent} from '../../components/categorie-management/categorie-management.component';
import {RestaurantInfoComponent} from '../../components/restaurant-info/restaurant-info.component';
import {RestaurantInfoManagementComponent} from '../../components/restaurant-info-management/restaurant-info-management.component';
import {WorkTimesComponent} from '../../components/work-times/work-times.component';
import {ReductionManagementComponent} from '../../components/reduction-management/reduction-management.component';
import {ScheduleAndHolidaysManagementComponent} from '../../components/schedule-and-holidays-management/schedule-and-holidays-management.component';
import {OffreManagementComponent} from '../../components/offre-management/offre-management.component';
import {StatisticsComponent} from '../../components/statistics/statistics.component';
import {PrinterConfigComponent} from '../../components/printer-config/printer-config.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',            component: DashboardComponent, canActivate: [DashboardGuard] },
    { path: 'commandes-en-atente',  component: CommandesEnAtenteComponent, canActivate: [DashboardGuard] },
    { path: 'commandes-en-cours',   component: CommandesEnCoursComponent, canActivate: [DashboardGuard] },
    { path: 'commandes-termine',    component: CommandeTermineComponent, canActivate: [DashboardGuard] },
    { path: 'commandes-archive',    component: CommandesArchivesComponent, canActivate: [DashboardGuard]},
    { path: 'ingredient',           component: IngredientManagementComponent, canActivate: [DashboardGuard] },
    { path: 'modificateur',         component: ModificateurManagementComponent, canActivate: [DashboardGuard] },
    { path: 'plat',                 component: PlatManagementComponent, canActivate: [DashboardGuard] },
    { path: 'categorie',            component: CategorieManagementComponent, canActivate: [DashboardGuard] },
    { path: 'restaurant',           component: RestaurantInfoComponent, canActivate: [DashboardGuard] },
    { path: 'upgrade',              component: UpgradeComponent, canActivate: [DashboardGuard] },
    { path: 'restaurantmanagement', component: RestaurantInfoManagementComponent, canActivate: [DashboardGuard]},
    { path: 'worktime',             component: WorkTimesComponent, canActivate: [DashboardGuard]},
    { path: 'reduction',            component: ReductionManagementComponent, canActivate: [DashboardGuard]},
    { path: 'schedle',              component: ScheduleAndHolidaysManagementComponent, canActivate: [DashboardGuard]},
    { path: 'offres',               component: OffreManagementComponent, canActivate: [DashboardGuard]},
    { path: 'statistics',           component: StatisticsComponent, canActivate: [DashboardGuard]},
    { path: 'printerconfig',         component: PrinterConfigComponent, canActivate: [DashboardGuard]}
];
