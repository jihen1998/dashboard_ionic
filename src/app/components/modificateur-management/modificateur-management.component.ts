import {Component, OnInit, ViewChild} from '@angular/core';
import {ModificateurService} from '../../Services/modificateurService/modificateur.service';
import {Modificateur} from '../../Models/modificateur';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PlatsOfModificateurComponent} from '../plats-of-modificateur/plats-of-modificateur.component';
import {IngredientsOfModificateurComponent} from '../ingredients-of-modificateur/ingredients-of-modificateur.component';
import {ModificateurFormComponent} from '../modificateur-form/modificateur-form.component';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';

@Component({
  selector: 'app-modificateur-management',
  templateUrl: './modificateur-management.component.html',
  styleUrls: ['./modificateur-management.component.css']
})
export class ModificateurManagementComponent implements OnInit {

  constructor(private ms: ModificateurService, private dialog: MatDialog) { }
  listmodif: Modificateur[] = [];
  displayedColumns: string[] = ['nom', 'limite', 'plats', 'ingredients', 'prix', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.listmodif);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.ms.getAll().subscribe((data: Modificateur[]) => {
      this.dataSource.data = data;
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    const dialogref = this.dialog.open(ModificateurFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Modificateur[]) => {
      if (!data) {
        this.ms.getAll().subscribe((mo: Modificateur[]) => {
          this.dataSource.data = mo;
        });
      }
      data.forEach(d => {
        this.dataSource.data.push(d);
      });
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(modificateur: Modificateur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = modificateur;
    const dialogref = this.dialog.open(ModificateurFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Modificateur) => {
      if (!data) {
        this.ms.getAll().subscribe((mo: Modificateur[]) => {
          this.dataSource.data = mo;
        });
      }
      const index = this.dataSource.data.indexOf(data);
      if (index >= 0) {
        this.dataSource.data[index] = data;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  delete(modif: Modificateur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.ms.deletemodificateur(modif.id).subscribe((data: Modificateur) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(modif), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  plats(modificateur: Modificateur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '57%';
    dialogConfig.height = '80%';
    dialogConfig.data = modificateur;
    const dialogref = this.dialog.open(PlatsOfModificateurComponent, dialogConfig);
  }

  Ingredients(modificateur: Modificateur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '50%';
    dialogConfig.height = '80%';
    dialogConfig.data = modificateur;
    const dialogref = this.dialog.open(IngredientsOfModificateurComponent, dialogConfig);
  }
}
