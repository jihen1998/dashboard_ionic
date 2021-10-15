import {Component, OnInit, ViewChild} from '@angular/core';
import {RestaurantInfo} from '../../Models/restaurant-info';
import {RestaurantInfoService} from '../../Services/RestaurantInfoService/restaurant-info.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {IngredientFormComponent} from '../ingredient-form/ingredient-form.component';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {DetailleCommandeComponent} from '../detaille-commande/detaille-commande.component';
import {RestaurantInfoFormComponent} from '../restaurant-info-form/restaurant-info-form.component';

@Component({
  selector: 'app-restaurant-info-management',
  templateUrl: './restaurant-info-management.component.html',
  styleUrls: ['./restaurant-info-management.component.css']
})
export class RestaurantInfoManagementComponent implements OnInit {
  allRestau: RestaurantInfo[] = [];
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['nom', 'logo', 'adresse', 'tel', 'Stripe', 'paypal', 'num_tva', 'num_tva_intercom', 'num_siret', 'num_siren', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.allRestau);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private rs: RestaurantInfoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.rs.all().subscribe((data: RestaurantInfo[]) => {
      this.allRestau = data;
      this.dataSource.data = data;
    });
  }

  edit(ri: RestaurantInfo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = ri;
    const dialogref = this.dialog.open(IngredientFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: RestaurantInfo) => {
      if (!data) {
        this.rs.all().subscribe((restauinf: RestaurantInfo[]) => {
          this.dataSource.data = restauinf;
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

  delete(ri: RestaurantInfo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.rs.delete(ri).subscribe(ata => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(ri), 1);
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
    dialogConfig.height = '90%';
    const dialogref = this.dialog.open(RestaurantInfoFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: RestaurantInfo[]) => {
      if (!data) {
        this.rs.all().subscribe((resi: RestaurantInfo[]) => {
          this.dataSource.data = resi;
        });
      }
      data.forEach(d => {
        this.dataSource.data.push(d);
      });
      this.dataSource.paginator = this.paginator;
    });
  }

  user(user_id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';;
    dialogConfig.data = user_id;
    this.dialog.open(DetailleCommandeComponent, dialogConfig);
  }

  stripe (ri: RestaurantInfo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = ri;
    this.dialog.open(DetailleCommandeComponent, dialogConfig);
  }

  paypal (ri: RestaurantInfo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = ri;
    this.dialog.open(DetailleCommandeComponent, dialogConfig);
  }

}
