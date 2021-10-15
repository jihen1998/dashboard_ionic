import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {IngredientService} from '../../Services/ingredientService/ingredient.service';
import {Ingredient} from '../../Models/ingredient';
import {FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-affect-ingred-to-modificateur',
  templateUrl: './affect-ingred-to-modificateur.component.html',
  styleUrls: ['./affect-ingred-to-modificateur.component.css']
})
export class AffectIngredToModificateurComponent implements OnInit {

  constructor(private is: IngredientService, @Inject(MAT_DIALOG_DATA) public modificateur_id: number,
              private matdialogref: MatDialogRef<AffectIngredToModificateurComponent>,
              private dialog: MatDialog) {
    this.filteredingr = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((nom: string | null) => nom ? this._filter(nom) : this.listingr.slice()));
  }

  listingr: Ingredient[] = [];
  filteredingr: Observable<Ingredient[]>;
  fruitCtrl = new FormControl();
  ingr: string[] = [];
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  newaffectations: Ingredient[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.is.getAll().subscribe((data: Ingredient[]) => {
      this.listingr = data;
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.ingr.push(value);
    }

    // Clear the input value
    // event.input.remove();
    this.fruitCtrl.setValue(null);
  }

  onsubmit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.listingr.forEach((ingredient, index) => {
          this.ingr.forEach(i => {
            if (i === ingredient.nom) {
              this.newaffectations.push(ingredient);
              this.is.affectIngredientModificateur(this.modificateur_id, ingredient.id).subscribe((d: Ingredient) => {
              });
            }
          });
          if (index === this.listingr.length - 1) {
            this.matdialogref.close(this.newaffectations);
          }
        });
      }
    });
  }

  remove(ingr: string): void {
    const index = this.ingr.indexOf(ingr);
    if (index >= 0) {
      this.ingr.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingr.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): Ingredient[] {
    // const filterValue = value.toLowerCase();
    return this.listingr.filter(ingr => ingr.nom.toLowerCase().includes(value));
  }
}
