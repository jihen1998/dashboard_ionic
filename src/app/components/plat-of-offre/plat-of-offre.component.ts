import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

import {Plat} from '../../Models/plat';
import {Offre} from '../../Models/offre';
import {OffreService} from '../../Services/OffreService/offre.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {AffectPlatToOffreComponentComponent} from '../affect-plat-to-offre-component/affect-plat-to-offre-component.component';

@Component({
  selector: 'app-plat-of-offre',
  templateUrl: './plat-of-offre.component.html',
  styleUrls: ['./plat-of-offre.component.css']
})
export class PlatOfOffreComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<PlatOfOffreComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Offre, private dialog: MatDialog,
              private os: OffreService) { }

  listPlat: Plat[] = [];
  displayedColumns: string[] = ['nom', 'image', 'description', 'statut', 'prix', 'delete'];
  dataSource = new MatTableDataSource(this.listPlat);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  close() {
    this.matdialogref.close();
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = this.data;
    const dialogref = this.dialog.open(AffectPlatToOffreComponentComponent, dialogConfig);
    dialogref.afterClosed().subscribe((plat: Plat[]) => {
      plat.forEach(p => {
        this.dataSource.data.push(p);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  delete(plat: Plat) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.os.destroyPlat(this.data.id, plat.id).subscribe((data: Plat) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(plat), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  ngOnInit(): void {
    this.listPlat = this.data.plats;
    this.dataSource.data = this.listPlat;
  }

}
