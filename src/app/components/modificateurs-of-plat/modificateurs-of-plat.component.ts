import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Plat} from '../../Models/plat';
import {Modificateur} from '../../Models/modificateur';
import {AffectModificateurToPlatComponent} from '../affect-modificateur-to-plat/affect-modificateur-to-plat.component';
import {ModificateurService} from '../../Services/modificateurService/modificateur.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {IngredientsOfModificateurComponent} from '../ingredients-of-modificateur/ingredients-of-modificateur.component';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {PlatService} from '../../Services/platService/plat.service';

@Component({
  selector: 'app-modificateurs-of-plat',
  templateUrl: './modificateurs-of-plat.component.html',
  styleUrls: ['./modificateurs-of-plat.component.css']
})
export class ModificateursOfPlatComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<ModificateursOfPlatComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Plat,
              private dialog: MatDialog, private ms: ModificateurService,
              private ps: PlatService) { }
  listmodificateurs = this.data.modificateurs;
  allmodif: Modificateur[] = [];
  displayedColumns: string[] = ['nom', 'ingredients', 'prix', 'delete'];
  dataSource = new MatTableDataSource(this.allmodif);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.allmodif);
    this.dataSource.data = this.listmodificateurs;
    /*this.ms.getAll().subscribe((modif: Modificateur[]) => {
      this.allmodif = modif;
      this.dataSource.data = this.allmodif;
    });*/
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = this.data;
    const dialogref = this.dialog.open(AffectModificateurToPlatComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data1: Modificateur[]) => {
      data1.forEach(d => this.listmodificateurs.push(d));
      this.dataSource.paginator = this.paginator;
    });
  }

  close() {
    this.dialog.closeAll();
  }

  Ingredients(modificateur: Modificateur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = modificateur;
    const dialogref = this.dialog.open(IngredientsOfModificateurComponent, dialogConfig);
  }

  delete(modif: Modificateur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.ps.detachPlatFromModif(this.data.id, modif.id).subscribe((data: Plat) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(modif), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }
}
