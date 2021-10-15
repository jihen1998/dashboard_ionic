import {Component, OnInit, ViewChild} from '@angular/core';
import {CategorieService} from '../../Services/CategorieService/categorie.service';
import {Categorie} from '../../Models/categorie';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {Modificateur} from '../../Models/modificateur';
import {CategorieFormComponent} from '../categorie-form/categorie-form.component';
import {PlatsOfCategorieComponent} from '../plats-of-categorie/plats-of-categorie.component';
import {UploadImageFormComponent} from '../upload-image-form/upload-image-form.component';

@Component({
  selector: 'app-categorie-management',
  templateUrl: './categorie-management.component.html',
  styleUrls: ['./categorie-management.component.css']
})
export class CategorieManagementComponent implements OnInit {

  constructor(private cs: CategorieService, private dialog: MatDialog) { }
  listeCategorie: Categorie[] = [];
  displayedColumns: string[] = ['nom', 'img', 'plats', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.listeCategorie);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    // get all categorie
    this.cs.getAll().subscribe((data: Categorie[]) => {
      this.dataSource.data = data;
    });
  }

  plats(categorie: Categorie) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '57%';
    dialogConfig.height = '80%';
    dialogConfig.data = categorie;
    const dialogref = this.dialog.open(PlatsOfCategorieComponent, dialogConfig);
    dialogref.afterClosed().subscribe(d =>{
      this.cs.getAll().subscribe((c: Categorie[]) => {
        this.dataSource.data = c;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  edit(categorie: Categorie) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = categorie;
    const dialogref = this.dialog.open(CategorieFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Categorie) => {
      this.cs.getAll().subscribe((data1: Categorie[]) => {
        this.listeCategorie = data1;
        this.dataSource.data = this.listeCategorie;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  delete(categorie: Categorie) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.cs.deleteCateg(categorie).subscribe((data: Modificateur) => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(categorie), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    const dialogref = this.dialog.open(CategorieFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Categorie) => {
      this.cs.getAll().subscribe((data1: Categorie[]) => {
        this.listeCategorie = data1;
        this.dataSource.data = this.listeCategorie;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  updateimage(categ: Categorie) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = categ;
    const dialogref = this.dialog.open(UploadImageFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Categorie) => {
        this.dataSource.data[this.dataSource.data.indexOf(data)].img = data.img;
        this.dataSource.paginator = this.paginator;
    });
  }
}
