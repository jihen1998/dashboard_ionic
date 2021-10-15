import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HolidayService} from '../../Services/HolidayService/holiday.service';
import {DatePipe} from '@angular/common';
import {RestaurantInfoService} from '../../Services/RestaurantInfoService/restaurant-info.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Holiday} from '../../Models/holiday';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {WorkTimes} from '../../Models/work-times';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {RestaurantInfo} from '../../Models/restaurant-info';
import {TimeService} from '../../Services/TimeService/time.service';
import {Time} from '../../Models/time';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {EditHolidayFormComponent} from '../edit-holiday-form/edit-holiday-form.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-schedule-and-holidays-management',
  templateUrl: './schedule-and-holidays-management.component.html',
  styleUrls: ['./schedule-and-holidays-management.component.css']
})
export class ScheduleAndHolidaysManagementComponent implements OnInit {

  constructor(private hs: HolidayService, private datepipe: DatePipe, private ts: TimeService,
              private rs: RestaurantInfoService, private dialog: MatDialog, fb: FormBuilder) {
    this.payment = fb.group({
      carte_bancaire: false,
      cash: false,
    });
    this.services = fb.group({
      livraison: false,
      emporter: false,
      sur_place: false
    });
  }
  payment: FormGroup;
  services: FormGroup;


  myRestau: RestaurantInfo;
  panelOpenState = true;
  newHolidays: Holiday[] = [];
  allHolidays: Holiday[] = [];
  allTimes: Time[] = [];
  displayedColumns: string[] = ['jour_férié'];
  displayedColumns1: string[] = ['jour', 'debut', 'fin', 'submit', 'supprimer'];
  displayedColumns2: string[] = ['jour_férié', 'edit', 'delete'];
  week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  dayselected: string[] = [];
  dataSource = new MatTableDataSource(this.newHolidays);
  dataSource1 = new MatTableDataSource(this.allTimes);
  dataSource2 = new MatTableDataSource(this.allHolidays);
  @ViewChild(MatTable) table: MatTable<WorkTimes>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('date') image: ElementRef;
  timeStart: any[] = [];
  timeEnd: any[] = [];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.rs.myRestau().subscribe((restau: RestaurantInfo[]) => {
      this.myRestau = restau[0];
      this.payment.patchValue({
        carte_bancaire: this.myRestau.carte_bancaire,
        cash: this.myRestau.cash,
      });
      this.services.patchValue({
        livraison: this.myRestau.livraison,
        emporter: this.myRestau.emporter,
        sur_place: this.myRestau.sur_place
      });
    });
    this.newHolidays.push(new Holiday());
    this.dataSource.data = this.newHolidays;
    this.dayselected.push('');
    this.hs.all().subscribe((data: Holiday[]) => {
      this.allHolidays = data;
      this.dataSource2.data = data;
    });
    this.ts.all().subscribe((times: Time[]) => {
      this.dataSource1.data = times;
      if (times.length > 0) {
        times.forEach(t => {
          this.timeStart.push({
            hour: toNumbers(t.start.substr(0, 2))[0] ,
            minute: toNumbers(t.start.substr(3, 2))[0],
            seconde: 0
          });
          this.timeEnd.push({
            hour: toNumbers(t.end.substr(0, 2))[0],
            minute: toNumbers(t.end.substr(3, 2))[0],
            seconde: 0
          });
        });
      } else {
        this.addTime();
      }
    });
  }

  addHoliday() {
    // tslint:disable-next-line:prefer-const
    this.dataSource.data.push(new Holiday());
    this.table.renderRows();
  }

  addTime() {
    let time: any;
    this.timeStart.push(time);
    this.timeEnd.push(time);
    // tslint:disable-next-line:prefer-const
    this.dataSource1.data.push(new Time());
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.data.pop();
    this.table.renderRows();
  }

  removeDataTime() {
    this.dataSource1.data.pop();
    this.table.renderRows();
  }

  getHolidayDate(i, $event) {
    this.dataSource.data[i].holiday = this.datepipe.transform($event.target.value, 'yyyy-MM-dd');
  }

  getStart(i, timestart) {
    this.dataSource1.data[i].start = (timestart.hour).toString().padStart(2, '0') + ':' +
      (timestart.minute).toString().padStart(2, '0');
  }

  getFin(i, timeend) {
    this.dataSource1.data[i].end = (timeend.hour).toString().padStart(2, '0') + ':' +
      (timeend.minute).toString().padStart(2, '0');
  }

  submitTime() {
    this.rs.myRestau().subscribe((restau: RestaurantInfo[]) => {
      this.dataSource1.data.forEach((time: Time) => {
        if (time.id === undefined) {
          this.ts.set(time).subscribe((d: Time) => {
            this.rs.affectrestauinfoToTime(d.id, restau[0].id).subscribe(data => { });
          });
        }
      });
      alert('success');
      this.ts.all().subscribe((t: Time[]) => {
        this.dataSource1.data = t;
      });
      this.dataSource1.paginator = this.paginator;
    });
  }

  submitOneTime(i: number, time: Time) {
    this.rs.myRestau().subscribe((restau: RestaurantInfo[]) => {
      this.ts.set(time).subscribe((d: Time) => {
        this.rs.affectrestauinfoToTime(d.id, restau[0].id).subscribe(data => { });
        alert('success');
        this.ts.all().subscribe((t: Time[]) => {
          this.dataSource1.data = t;
        });
        this.dataSource1.paginator = this.paginator;
      });
    });
  }

  submitHoliday() {
    this.dataSource.data.forEach((h: Holiday) => {
      this.rs.myRestau().subscribe((da: RestaurantInfo[]) => {
        h.restaurant_info_id = da[0].id;
      });
      this.hs.set(h).subscribe((d: Holiday) => {
        this.rs.myRestau().subscribe((da: RestaurantInfo[]) => {
          this.rs.affectRestauToHoliday(d.id, da[0].id).subscribe(retour => {
            this.hs.all().subscribe((holidays: Holiday[]) => {
              this.dataSource2.data = holidays;
              this.dataSource.paginator = this.paginator;
              this.table.renderRows();
            })
          });
        });
      });
    });
    if (this.dataSource.data.length > 1) {
      this.dataSource.data.splice(1, this.dataSource.data.length - 1);
    }
    this.image.nativeElement.value = '';
    alert('success');
    this.dataSource.paginator = this.paginator;
  }

  displayCol() {
    this.displayedColumns = ['jour_férié'];
  }

  displayCol1() {
    this.displayedColumns = this.displayedColumns1;
  }

  displayCol2() {
    this.displayCol();
    this.displayedColumns = this.displayedColumns2;
  }

  edit(element) {
    this.ts.edit(element).subscribe((time: Time) => {
      alert('success');
      this.ts.all().subscribe((t: Time[]) => {
        this.dataSource1.data = t;
      });
      this.dataSource1.paginator = this.paginator;
    });
  }

  delete(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.ts.del(element.id).subscribe(time => {
          this.dataSource1.data.splice(this.dataSource1.data.indexOf(element), 1);
          this.dataSource1.paginator = this.paginator;
        });
      }
    });
  }

  editHoliday(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = element;
    const dialogref = this.dialog.open(EditHolidayFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: Holiday) => {
        this.hs.all().subscribe((data1: Holiday[]) => {
          this.dataSource2.data = data1;
          this.dataSource2.paginator = this.paginator;
        });
    });
  }

  deleteHoliday(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.hs.del(element.id).subscribe((data: Holiday) => {
          this.dataSource2.data.splice(this.dataSource2.data.indexOf(element), 1);
          this.dataSource2.paginator = this.paginator;
        });
      }
    });
  }

  updateRestauInfo() {
    this.myRestau.carte_bancaire = this.payment.value.carte_bancaire;
    this.myRestau.cash = this.payment.value.cash;
    this.myRestau.livraison = this.services.value.livraison;
    this.myRestau.emporter = this.services.value.emporter;
    this.myRestau.sur_place = this.services.value.sur_place;
    this.rs.update(this.myRestau).subscribe((r: RestaurantInfo) => {
      alert('success');
    });
  }
}
