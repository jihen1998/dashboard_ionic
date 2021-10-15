import {Component, OnInit, ViewChild} from '@angular/core';
import {IngredientService} from '../../Services/ingredientService/ingredient.service';
import {Ingredient} from '../../Models/ingredient';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {IngredientFormComponent} from '../ingredient-form/ingredient-form.component';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';

@Component({
  selector: 'app-ingredient-management',
  templateUrl: './ingredient-management.component.html',
  styleUrls: ['./ingredient-management.component.css']
})
export class IngredientManagementComponent implements OnInit {

  listeing: Ingredient[] = [];
  displayedColumns: string[] = ['nom', 'prix', 'statut', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.listeing);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private is: IngredientService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.is.getAll().subscribe((data: Ingredient[]) => {
      this.listeing = data;
      this.dataSource.data = this.listeing;
    });
  }

  edit(ing: Ingredient) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = ing;
    const dialogref = this.dialog.open(IngredientFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Ingredient) => {
      if (!data) {
        this.is.getAll().subscribe((mo: Ingredient[]) => {
          this.dataSource.data = mo;
        });
      }
      this.dataSource.data.forEach(i => {
        if (i.id === data.id) {
          const index = this.dataSource.data.indexOf(data);
          if (index >= 0 ) {
            this.dataSource.data[index] = data;
            this.dataSource.paginator = this.paginator;
          }
        }
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
        this.is.deleteingredient(ing.id).subscribe(ata => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(ing), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    const dialogref = this.dialog.open(IngredientFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Ingredient[]) => {
      if (!data) {
        this.is.getAll().subscribe((mo: Ingredient[]) => {
          this.dataSource.data = mo;
        });
      } else {
        data.forEach((d: Ingredient) => {
          console.log(d);
          this.dataSource.data.push(d);
        });
      }
      this.dataSource.paginator = this.paginator;
    });
  }

  changeStatut(ingredient: Ingredient) {
    this.is.changeStatut(ingredient).subscribe((ingred: Ingredient) => {
      this.dataSource.data[this.dataSource.data.indexOf(ingredient)] = ingredient;
      this.dataSource.paginator = this.paginator;
    }, error => this.dataSource.data[this.dataSource.data.indexOf(ingredient)].statut = !ingredient.statut);
  }
}
