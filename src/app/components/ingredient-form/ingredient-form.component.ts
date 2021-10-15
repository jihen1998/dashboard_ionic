import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Ingredient} from '../../Models/ingredient';
import {IngredientService} from '../../Services/ingredientService/ingredient.service';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<IngredientFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Ingredient,
              private is: IngredientService, private dialog: MatDialog) {
  }

  ing = new Ingredient();
  newing: Ingredient[] = [];

  ngOnInit(): void {
    if (!this.data) {
      this.data = this.ing;
      this.data.statut = true;
    }
  }

  onsubmit(f: NgForm) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        // add new ing
        if (this.data === this.ing) {
          this.data.nom = f.value.nom;
          this.data.prix = f.value.prix;
          this.data.quantite = 1;
          this.data.statut = true;
          this.is.addIngredient(this.data).subscribe((data: Ingredient) => {
            const dialogref1 = this.dialog.open(BackConfirmationComponent, dialogConfig);
            data.statut = true;
            this.newing.push(data);
            dialogref1.afterClosed().subscribe((retour1: boolean) => {
              if (retour1 === false) {
                this.matdialogref.close(this.newing);
              } else {
                f.form.reset();
                this.data = this.ing;
              }
            });
          });
        } else { // edit existing ing
          this.data.nom = f.value.nom;
          this.data.prix = f.value.prix;
          this.is.updateingredient(this.data).subscribe(data => {
            this.matdialogref.close();
          });
        }
      }
    });
  }

  onclose(f: NgForm) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.matdialogref.close();
      }
    });
  }
}
