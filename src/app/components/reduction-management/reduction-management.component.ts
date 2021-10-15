import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CodeRedService} from '../../Services/CodeRedService/code-red.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CodeReduction} from '../../Models/code-reduction';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {formatDate} from '@angular/common';
import {AddReductionFormComponent} from '../add-reduction-form/add-reduction-form.component';
import {UserManagementComponent} from '../user-management/user-management.component';

@Component({
  selector: 'app-reduction-management',
  templateUrl: './reduction-management.component.html',
  styleUrls: ['./reduction-management.component.css']
})
export class ReductionManagementComponent implements OnInit {

  constructor(private crs: CodeRedService, private dialog: MatDialog) { }

  displayedColumns: string[] = ['code', 'statut', 'taux_reduction', 'user', 'expiration', 'edit', 'delete'];
  allCodes: CodeReduction[] = [];
  dataSource = new MatTableDataSource(this.allCodes);
  sysdate = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en_US');
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.crs.getAll().subscribe((cr: CodeReduction[]) => {
      cr.forEach(c => {
        if (c.date_expiration) {
          c.date_expiration = formatDate(c.date_expiration, 'yyyy-MM-dd hh:mm:ss', 'en_US');
        }
      });
      this.allCodes = cr;
      this.dataSource.data = this.allCodes;
    });
  }

  edit(ing: CodeReduction) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = ing;
    const dialogref = this.dialog.open(AddReductionFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: CodeReduction) => {
      if (!data) {
        this.crs.getAll().subscribe((mo: CodeReduction[]) => {
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

  delete(ing: CodeReduction) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.crs.delete(ing).subscribe(ata => {
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
    const dialogref = this.dialog.open(AddReductionFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: CodeReduction[]) => {
      if (!data) {
        this.crs.getAll().subscribe((mo: CodeReduction[]) => {
          this.dataSource.data = mo;
        });
      } else  {
        data.forEach(d => {
          this.dataSource.data.push(d);
        });
      }
      this.dataSource.paginator = this.paginator;
    });
  }

  changeStatut(ingredient: CodeReduction) {
    this.crs.update(ingredient).subscribe((ingred: CodeReduction) => {
      console.log(ingred);
      this.dataSource.data[this.dataSource.data.indexOf(ingredient)] = ingredient;
      this.dataSource.paginator = this.paginator;
    }, error => this.dataSource.data[this.dataSource.data.indexOf(ingredient)].statut = !ingredient.statut);
  }

  user(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '30%';
    dialogConfig.data = element;
    const dialogref = this.dialog.open(UserManagementComponent, dialogConfig);
  }
}
