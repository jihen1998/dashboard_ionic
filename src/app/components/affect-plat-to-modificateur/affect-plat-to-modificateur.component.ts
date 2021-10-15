import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, NgForm} from '@angular/forms';
import {PlatService} from '../../Services/platService/plat.service';
import {Plat} from '../../Models/plat';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {Modificateur} from '../../Models/modificateur';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-affect-plat-to-ingredient',
  templateUrl: './affect-plat-to-modificateur.component.html',
  styleUrls: ['./affect-plat-to-modificateur.component.css']
})
export class AffectPlatToModificateurComponent implements OnInit {

  constructor(private ps: PlatService,
              @Inject(MAT_DIALOG_DATA) public modificateur: Modificateur,
              private dialog: MatDialog, private matdialogref: MatDialogRef<AffectPlatToModificateurComponent>) {
    this.filteredPlats = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((nom: string | null) => nom ? this._filter(nom) : this.allPlats.slice()));
  }

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredPlats: Observable<Plat[]>;
  plats: string[] = [];
  allPlats: Plat[] = [];
  newaffectations: Plat[] = [];


  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.ps.getAll().subscribe((data: Plat[]) => {
      this.allPlats = data;
      this.allPlats.forEach(p => {
        this.modificateur.plats.forEach(d => {
          if (p.nom == d.nom) {
            this.allPlats.splice(this.allPlats.indexOf(p), 1);
          }
        });
      });
      console.log(this.allPlats);
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.plats.push(value);
    }

    // Clear the input value
    // event.input.remove();
    this.fruitCtrl.setValue(null);
  }

  remove(plat: string): void {
    const index = this.plats.indexOf(plat);
    if (index >= 0) {
      this.plats.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.plats.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): Plat[] {
    // const filterValue = value.toLowerCase();
    return this.allPlats.filter(plat => plat.nom.toLowerCase().includes(value));
  }

  affect() {
    this.plats.forEach((p, index) => {
      this.allPlats.forEach(plat => {
        if (plat.nom === p) {
          this.ps.affectPlatModif(plat.id, this.modificateur.id).subscribe((d: Plat) => {
            this.newaffectations.push(plat);
            if (index === this.plats.length - 1) {
              this.matdialogref.close(this.newaffectations);
            }
          });
        }
      });
    });
  }

  onsubmit(f: NgForm) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.affect();
      }
    });
  }
}
