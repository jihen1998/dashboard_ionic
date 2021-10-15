import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Categorie} from '../../Models/categorie';
import {AffectPlatToCategorieComponent} from '../affect-plat-to-categorie/affect-plat-to-categorie.component';
import {Plat} from '../../Models/plat';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {CategorieService} from '../../Services/CategorieService/categorie.service';

@Component({
  selector: 'app-plats-of-categorie',
  templateUrl: './plats-of-categorie.component.html',
  styleUrls: ['./plats-of-categorie.component.css']
})
export class PlatsOfCategorieComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<PlatsOfCategorieComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Categorie, private dialog: MatDialog,
              private cs: CategorieService) { }
  listplats: Plat[] = [];
  displayedColumns: string[] = ['nom', 'image', 'description', 'statut', 'prix', 'delete'];
  dataSource = new MatTableDataSource(this.listplats);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.listplats = this.data.plats;
    this.dataSource.data = this.listplats;
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
    const dialogref = this.dialog.open(AffectPlatToCategorieComponent, dialogConfig);
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
        this.cs.detachPlat(this.data, plat.id).subscribe((data: Plat) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(plat), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

}
