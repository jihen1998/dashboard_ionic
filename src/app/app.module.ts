import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {CommandesEnAtenteComponent} from './components/commandes-en-atente/commandes-en-atente.component';
import {MaterialModule} from './material/material.module';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {DetailleCommandeComponent} from './components/detaille-commande/detaille-commande.component';
import {CommandesEnCoursComponent} from './components/commandes-en-cours/commandes-en-cours.component';
import {CommandeTermineComponent} from './components/commande-termine/commande-termine.component';
import {CommandesArchivesComponent} from './components/commandes-archives/commandes-archives.component';
import {IngredientManagementComponent} from './components/ingredient-management/ingredient-management.component';
import {IngredientFormComponent} from './components/ingredient-form/ingredient-form.component';
import {ModificateurManagementComponent} from './components/modificateur-management/modificateur-management.component';
import {PlatsOfModificateurComponent} from './components/plats-of-modificateur/plats-of-modificateur.component';
import {AffectPlatToModificateurComponent} from './components/affect-plat-to-modificateur/affect-plat-to-modificateur.component';
import {IngredientsOfModificateurComponent} from './components/ingredients-of-modificateur/ingredients-of-modificateur.component';
import {AffectIngredToModificateurComponent} from './components/affect-ingred-to-modificateur/affect-ingred-to-modificateur.component';
import {ModificateurFormComponent} from './components/modificateur-form/modificateur-form.component';
import {PlatManagementComponent} from './components/plat-management/plat-management.component';
import {PlatFormComponent} from './components/plat-form/plat-form.component';
import {ModificateursOfPlatComponent} from './components/modificateurs-of-plat/modificateurs-of-plat.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {ConfirmationBannerComponent} from './components/confirmation-banner/confirmation-banner.component';
import {AffectModificateurToPlatComponent} from './components/affect-modificateur-to-plat/affect-modificateur-to-plat.component';
import {BackConfirmationComponent} from './components/back-confirmation/back-confirmation.component';
import {CategorieManagementComponent} from './components/categorie-management/categorie-management.component';
import {PlatsOfCategorieComponent} from './components/plats-of-categorie/plats-of-categorie.component';
import {AffectPlatToCategorieComponent} from './components/affect-plat-to-categorie/affect-plat-to-categorie.component';
import {CategorieFormComponent} from './components/categorie-form/categorie-form.component';
import {UploadImageFormComponent} from './components/upload-image-form/upload-image-form.component';
import {RestaurantInfoComponent} from './components/restaurant-info/restaurant-info.component';
import {RestaurantInfoManagementComponent} from './components/restaurant-info-management/restaurant-info-management.component';
import {RestaurantInfoFormComponent} from './components/restaurant-info-form/restaurant-info-form.component';
import {WorkTimesComponent} from './components/work-times/work-times.component';
import {DatePipe} from '@angular/common';
import {EditWorkTimeFormComponent} from './components/edit-work-time-form/edit-work-time-form.component';
import {ReductionManagementComponent} from './components/reduction-management/reduction-management.component';
import {AddReductionFormComponent} from './components/add-reduction-form/add-reduction-form.component';
import {AngularFireModule} from 'angularfire2';
import {Env} from './Models/env';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FirebaseService} from './Services/Firebase/firebase.service';
import {ThermalPrintModule} from 'ng-thermal-print';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ThermalPrintModule,
    AngularFireModule.initializeApp(Env.firebase),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CommandesEnAtenteComponent,
    LoginFormComponent,
    DetailleCommandeComponent,
    CommandesEnCoursComponent,
    CommandeTermineComponent,
    CommandesArchivesComponent,
    IngredientManagementComponent,
    IngredientFormComponent,
    ModificateurManagementComponent,
    PlatsOfModificateurComponent,
    AffectPlatToModificateurComponent,
    IngredientsOfModificateurComponent,
    AffectIngredToModificateurComponent,
    ModificateurFormComponent,
    PlatManagementComponent,
    PlatFormComponent,
    ModificateursOfPlatComponent,
    RegisterFormComponent,
    ConfirmationBannerComponent,
    AffectModificateurToPlatComponent,
    BackConfirmationComponent,
    CategorieManagementComponent,
    PlatsOfCategorieComponent,
    AffectPlatToCategorieComponent,
    CategorieFormComponent,
    UploadImageFormComponent,
    RestaurantInfoComponent,
    RestaurantInfoManagementComponent,
    RestaurantInfoFormComponent,
    WorkTimesComponent,
    EditWorkTimeFormComponent,
    ReductionManagementComponent,
    AddReductionFormComponent,
  ],
  providers: [
    DatePipe,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
