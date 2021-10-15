import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Plat} from '../../Models/plat';
import {AffectPlatToModificateurComponent} from '../affect-plat-to-modificateur/affect-plat-to-modificateur.component';
import {Modificateur} from '../../Models/modificateur';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {PlatService} from '../../Services/platService/plat.service';

@Component({
  selector: 'app-plats-of-ingredient',
  templateUrl: './plats-of-modificateur.component.html',
  styleUrls: ['./plats-of-modificateur.component.css']
})
export class PlatsOfModificateurComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<PlatsOfModificateurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Modificateur,
              private dialog: MatDialog, private ps: PlatService) { }
  modificateur: Modificateur = this.data;
  listeplats: Plat[] = [];
  displayedColumns: string[] = ['nom', 'image', 'description', 'statut', 'prix', 'delete'];
  dataSource = new MatTableDataSource(this.listeplats);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.listeplats = this.data.plats;
    this.dataSource.data = this.listeplats;
  }

  delete(plat: Plat) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.ps.detachPlatFromModif(plat.id, this.data.id).subscribe((data: Plat) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(plat), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  close() {
    this.matdialogref.close();
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = this.modificateur;
    const dialogref = this.dialog.open(AffectPlatToModificateurComponent, dialogConfig);
    dialogref.afterClosed().subscribe((d: Plat[]) => {
      d.forEach(plat => {
        this.dataSource.data.push(plat);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
}
