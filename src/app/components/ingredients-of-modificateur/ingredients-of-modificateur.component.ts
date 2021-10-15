import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {IngredientService} from '../../Services/ingredientService/ingredient.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Ingredient} from '../../Models/ingredient';
import {AffectIngredToModificateurComponent} from '../affect-ingred-to-modificateur/affect-ingred-to-modificateur.component';
import {Modificateur} from '../../Models/modificateur';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';

@Component({
  selector: 'app-ingredients-of-modificateur',
  templateUrl: './ingredients-of-modificateur.component.html',
  styleUrls: ['./ingredients-of-modificateur.component.css']
})
export class IngredientsOfModificateurComponent implements OnInit {

  constructor(private is: IngredientService,
              private matdialogref: MatDialogRef<IngredientsOfModificateurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Modificateur,
              private dialog: MatDialog) { }

  listingr: Ingredient[] = [];
  displayedColumns: string[] = ['nom', 'prix', 'statut', 'delete'];
  dataSource = new MatTableDataSource(this.listingr);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.listingr = this.data.ingredients;
    this.dataSource.data = this.listingr;
  }

  close() {
    this.matdialogref.close();
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = this.data.id;
    const dialogref = this.dialog.open(AffectIngredToModificateurComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data1: Ingredient[]) => {
      data1.forEach(d => {
        this.dataSource.data.push(d);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  delete(ing: Ingredient) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.is.deleteIngredientFromModificateur(this.data.id, ing.id).subscribe(ata => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(ing), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }
}
