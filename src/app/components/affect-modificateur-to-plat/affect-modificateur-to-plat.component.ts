import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ModificateurService} from '../../Services/modificateurService/modificateur.service';
import {Modificateur} from '../../Models/modificateur';
import {FormControl, NgForm} from '@angular/forms';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {Observable} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import {Plat} from '../../Models/plat';

@Component({
  selector: 'app-affect-modificateur-to-plat',
  templateUrl: './affect-modificateur-to-plat.component.html',
  styleUrls: ['./affect-modificateur-to-plat.component.css']
})
export class AffectModificateurToPlatComponent implements OnInit {

  constructor(private ms: ModificateurService, @Inject(MAT_DIALOG_DATA) public plat: Plat,
              private matdialogref: MatDialogRef<AffectModificateurToPlatComponent>,
              private dialog: MatDialog) {
    this.filteredmodif = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((nom: string | null) => nom ? this._filter(nom) : this.listmodif.slice()));
  }

  plat_id = this.plat.id;
  listmodif: Modificateur[] = [];
  checklist = [];
  filteredmodif: Observable<Modificateur[]>;
  fruitCtrl = new FormControl();
  modif: string[] = [];
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  newaffectation: Modificateur[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.ms.getAll().subscribe((d: Modificateur[]) => {
      this.listmodif = d;
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.modif.push(value);
    }

    // Clear the input value
    // event.input.remove();
    this.fruitCtrl.setValue(null);
  }


  remove(ingr: string): void {
    const index = this.modif.indexOf(ingr);
    if (index >= 0) {
      this.modif.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.modif.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): Modificateur[] {
    // const filterValue = value.toLowerCase();
    return this.listmodif.filter(modif => modif.nom.toLowerCase().includes(value));
  }

  onsubmit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.listmodif.forEach((modif, index) => {
          this.modif.forEach(m => {
            if (m === modif.nom) {
              this.newaffectation.push(modif);
              this.ms.affectModifiToPlat(this.plat_id, modif.id).subscribe(d => {
              });
            }
          });
          if (index === this.listmodif.length - 1) {
            this.matdialogref.close(this.newaffectation);
          }
        });
      }
    });
  }
}
