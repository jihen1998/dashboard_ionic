import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {PlatService} from '../../Services/platService/plat.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OffreService} from '../../Services/OffreService/offre.service';
import {Offre} from '../../Models/offre';
import {Plat} from '../../Models/plat';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-affect-plat-to-offre-component',
  templateUrl: './affect-plat-to-offre-component.component.html',
  styleUrls: ['./affect-plat-to-offre-component.component.css']
})
export class AffectPlatToOffreComponentComponent implements OnInit {

  constructor(private os: OffreService, private ps: PlatService,
              @Inject(MAT_DIALOG_DATA) public data: Offre,
              private dialog: MatDialog,
              private matdialogref: MatDialogRef<AffectPlatToOffreComponentComponent>) {
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
    this.ps.getAll().subscribe((plats: Plat[]) => {
      this.allPlats = plats;
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
          this.newaffectations.push(plat);
          this.os.affectPlat(this.data.id, plat.id).subscribe(d => {
          });
        }
      });
      if (index === this.plats.length - 1) {
        this.matdialogref.close(this.newaffectations);
      }
    });
  }

}
