import {Component, OnInit, ViewChild} from '@angular/core';
import {OffreService} from '../../Services/OffreService/offre.service';
import {Offre} from '../../Models/offre';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ImageService} from '../../Services/imageService/image.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {PlatOfOffreComponent} from '../plat-of-offre/plat-of-offre.component';
import {OffreFormComponent} from '../offre-form/offre-form.component';

@Component({
  selector: 'app-offre-management',
  templateUrl: './offre-management.component.html',
  styleUrls: ['./offre-management.component.css']
})
export class OffreManagementComponent implements OnInit {

  constructor(private os: OffreService, private dialog: MatDialog, private imgs: ImageService) { }
  allOffres: Offre[] = [];
  displayedColumns: string[] = ['nom', 'image', 'description', 'statut', 'prix', 'plats', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.allOffres);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.os.All().subscribe((offres: Offre[]) => {
      this.allOffres = offres;
      this.dataSource.data = offres;
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    const dialogref = this.dialog.open(OffreFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Offre[]) => {
      this.os.All().subscribe((offre: Offre[]) => {
        this.dataSource.data = offre;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(offre: Offre) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = offre;
    const dialogref = this.dialog.open(OffreFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Offre) => {
      const index = this.dataSource.data.indexOf(data);
      if (index >= 0) {
        this.dataSource.data[index] = data;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  delete(offre: Offre) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.os.del(offre.id).subscribe((data: Offre) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(offre), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  plats(offre: Offre) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = offre;
    const dialogref = this.dialog.open(PlatOfOffreComponent, dialogConfig);
  }

  changeStatut(element) {
    console.log(element);
    this.os.update(element).subscribe((offre: Offre) => {
      console.log(offre);
    });
  }
}
