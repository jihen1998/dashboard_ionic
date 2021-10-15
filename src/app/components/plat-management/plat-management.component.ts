import {Component, OnInit, ViewChild} from '@angular/core';
import {PlatService} from '../../Services/platService/plat.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Plat} from '../../Models/plat';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PlatFormComponent} from '../plat-form/plat-form.component';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {ModificateursOfPlatComponent} from '../modificateurs-of-plat/modificateurs-of-plat.component';
import {ImageService} from '../../Services/imageService/image.service';
import {Ingredient} from '../../Models/ingredient';

@Component({
  selector: 'app-plat-management',
  templateUrl: './plat-management.component.html',
  styleUrls: ['./plat-management.component.css']
})
export class PlatManagementComponent implements OnInit {

  constructor(private ps: PlatService, private dialog: MatDialog, private imgs: ImageService) { }
  listplats: Plat[] = [];
  displayedColumns: string[] = ['nom', 'image', 'description', 'statut', 'prix', 'modificateurs', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.listplats);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.ps.getAll().subscribe((data: Plat[]) => {
      this.dataSource.data = data;
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    const dialogref = this.dialog.open(PlatFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Plat[]) => {
      this.ps.getAll().subscribe((plats: Plat[]) => {
        this.dataSource.data = plats;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(plat: Plat) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = plat;
    const dialogref = this.dialog.open(PlatFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Plat) => {
      const index = this.dataSource.data.indexOf(data);
      if (index >= 0) {
        this.dataSource.data[index] = data;
        this.dataSource.paginator = this.paginator;
      }
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
        this.ps.deleteplat(plat.id).subscribe((data: Plat) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(plat), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  Modificateurs(plat: Plat) {
    console.log(plat);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '47%';
    dialogConfig.height = '70%';
    dialogConfig.data = plat;
    const dialogref = this.dialog.open(ModificateursOfPlatComponent, dialogConfig);
  }

  changeStatut(plat: Plat) {
    this.ps.changeStatut(plat).subscribe((pl: Plat) => {
      this.dataSource.data[this.dataSource.data.indexOf(plat)] = pl;
      this.dataSource.paginator = this.paginator;
    }, error => this.dataSource.data[this.dataSource.data.indexOf(plat)].statut = !plat.statut);
  }
}
