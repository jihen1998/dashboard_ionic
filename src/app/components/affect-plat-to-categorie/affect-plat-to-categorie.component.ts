import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Categorie} from '../../Models/categorie';
import {PlatService} from '../../Services/platService/plat.service';
import {Plat} from '../../Models/plat';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {CategorieService} from '../../Services/CategorieService/categorie.service';

@Component({
  selector: 'app-affect-plat-to-categorie',
  templateUrl: './affect-plat-to-categorie.component.html',
  styleUrls: ['./affect-plat-to-categorie.component.css']
})
export class AffectPlatToCategorieComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Categorie,
              private ps: PlatService, private cs: CategorieService,
              private matdialogref: MatDialogRef<AffectPlatToCategorieComponent>) {
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
    console.log(this.data.id);
    this.ps.getAll().subscribe((data: Plat[]) => {
      data.forEach(p => {
        if (p.categorie_id === null) {
          this.allPlats.push(p);
        }
      });
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
          this.cs.affectPlat(this.data, plat.id).subscribe(d => {
          });
        }
      });
      if (index === this.plats.length - 1) {
        this.matdialogref.close(this.newaffectations);
      }
    });
  }
}
