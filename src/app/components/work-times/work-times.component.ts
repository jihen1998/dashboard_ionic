import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {WorkTimes} from '../../Models/work-times';
import {WorkTimeServiceService} from '../../Services/WorkTime/work-time-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DatePipe} from '@angular/common';
import {RestaurantInfoService} from '../../Services/RestaurantInfoService/restaurant-info.service';
import {RestaurantInfo} from '../../Models/restaurant-info';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {EditWorkTimeFormComponent} from '../edit-work-time-form/edit-work-time-form.component';

export interface worktimeAndDate {
  worktime: WorkTimes;
  date: Date;
}

@Component({
  selector: 'app-work-times',
  templateUrl: './work-times.component.html',
  styleUrls: ['./work-times.component.css']
})

export class WorkTimesComponent implements OnInit {
  constructor(private ws: WorkTimeServiceService, private datepipe: DatePipe,
              private rs: RestaurantInfoService, private dialog: MatDialog) {
  }

  panelOpenState = true;

  displayedColumns: string[] = ['jour', 'debut', 'fin', 'jour_férié', 'validate'];
  displayedColumns1: string[] = ['jour', 'debut', 'fin', 'jour_férié', 'edit', 'delete'];
  allTimeWorks: worktimeAndDate[] = [];
  newWorkTimes: WorkTimes[] = [];
  week = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  dayselected: string[] = [];
  dataSource = new MatTableDataSource(this.newWorkTimes);
  dataSource1 = new MatTableDataSource(this.allTimeWorks);
  @ViewChild(MatTable) table: MatTable<WorkTimes>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  worktime: WorkTimes = new WorkTimes();
  timestart: any;
  timeStart: any[] = [];
  timeEnd: any[] = [];
  timeend: any;
  myFilter: any[] = [];


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    // this.myFilter.push(this.myfilter);
    this.newWorkTimes.push(new WorkTimes());
    this.dayselected.push('');
    this.ws.all().subscribe((data: WorkTimes[]) => {
      for (let i = 0; i < data.length; i++) {
        let timework: worktimeAndDate;
        if (data[i].start) {
          timework = {
            worktime: data[i],
            date: new Date(data[i].start)
          };
        } else {
          timework = {
            worktime: data[i],
            date: new Date(data[i].holiday)
          };
        }
        this.allTimeWorks.push(timework);
      }
      this.dataSource1.data = this.allTimeWorks;
    });
  }

  addData() {
    // tslint:disable-next-line:prefer-const
    let time: any;
    this.timeEnd.push(time);
    this.timeStart.push(time);
    this.dataSource.data.push(new WorkTimes());
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.data.pop();
    this.table.renderRows();
  }

  getStartDate(index, dateStart) {
    if (!this.dataSource.data[index].start) {
      this.dataSource.data[index].start = this.datepipe.transform(dateStart.target.value, 'yyyy-MM-dd');
    } else if (this.dataSource.data[index].start.length === 16) {
      this.dataSource.data[index].start = this.datepipe.transform(dateStart.target.value, 'yyyy-MM-dd ') +
        this.dataSource.data[index].start.substr(11);
    } else {
      this.dataSource.data[index].start = this.datepipe.transform(dateStart.target.value, 'yyyy-MM-dd ') +
        this.dataSource.data[index].start;
    }
    this.dataSource.data.forEach(d => console.log(d));
  }

  getStartTime(index, timestart) {
    if (this.dataSource.data[index].start) {
      this.dataSource.data[index].start =
        this.dataSource.data[index].start.substr(0, 10) + ' ' +
        (timestart.hour).toString().padStart(2, '0') + ':' +
        (timestart.minute).toString().padStart(2, '0');
    } else {
      this.dataSource.data[index].start = (timestart.hour).toString().padStart(2, '0') + ':' +
        (timestart.minute).toString().padStart(2, '0');
    }
    this.dataSource.data.forEach(d => console.log(d.start.length));
  }

  getFinDate(i, $event) {
    if (!this.dataSource.data[i].end) {
      this.dataSource.data[i].end = this.datepipe.transform($event.target.value, 'yyyy-MM-dd');
    } else if (this.dataSource.data[i].end.length === 16) {
      this.dataSource.data[i].end = this.datepipe.transform($event.target.value, 'yyyy-MM-dd') +
        this.dataSource.data[i].end.substr(11);
    } else {
      this.dataSource.data[i].end = this.datepipe.transform($event.target.value, 'yyyy-MM-dd') +
        this.dataSource.data[i].end;
    }
  }

  getEndTime(i, timeend) {
    if (this.dataSource.data[i].end) {
      this.dataSource.data[i].end =
        this.dataSource.data[i].end.substr(0, 10) + ' ' +
        (timeend.hour).toString().padStart(2, '0') + ':' +
        (timeend.minute).toString().padStart(2, '0');
    } else {
      this.dataSource.data[i].start = (timeend.hour).toString().padStart(2, '0') + ':' +
        (timeend.minute).toString().padStart(2, '0');
    }
  }

  getHolidayDate(i, $event) {
    this.dataSource.data[i].holiday = this.datepipe.transform($event.target.value, 'yyyy-MM-dd');
  }

  submit() {
    this.dataSource.data.forEach((w: WorkTimes) => {
      this.ws.set(w).subscribe((d: WorkTimes) => {
        this.rs.myRestau().subscribe((da: RestaurantInfo[]) => {
          // this.rs.affectRestauToWorkTime(d.id, da[0].id).subscribe(retour => console.log(retour));
        });
      });
      alert('success');
    });
  }

  selectday(i) {
    this.myFilter[i] = (d: Date): boolean => {
      const day = d.getDay();
      switch (this.dayselected[i]) {
        case 'lundi':
          return day !== 1;
        case 'mardi':
          return day !== 2;
        case 'merdredi':
          return day !== 3;
        case 'jeudi':
          return day !== 4;
        case 'vendredi':
          return day !== 5;
        case 'samedi':
          return day !== 6;
        case 'dimanche':
          return day !== 0;
      }
    };
  }

  edit(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.data = element;
    const dialogref = this.dialog.open(EditWorkTimeFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe((data: worktimeAndDate) => {
      if (!data) {
        this.ws.all().subscribe((data1: WorkTimes[]) => {
          this.allTimeWorks = [];
          this.dataSource1.data = [];
          for (let i = 0; i < data1.length; i++) {
            let timework: worktimeAndDate;
            if (data1[i].start) {
              timework = {
                worktime: data1[i],
                date: new Date(data1[i].start)
              };
            } else {
              timework = {
                worktime: data1[i],
                date: new Date(data1[i].holiday)
              };
            }
            this.allTimeWorks.push(timework);
          }
          this.dataSource1.data = this.allTimeWorks;
          this.dataSource1.paginator = this.paginator;
        });
      } else {
        this.dataSource1.data.forEach(i => {
          if (i.worktime.id === data.worktime.id) {
            const index = this.dataSource1.data.indexOf(data);
            if (index >= 0) {
              this.dataSource1.data[index] = data;
              this.dataSource1.paginator = this.paginator;
            }
          }
        });
      }
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
        this.ws.del(element.worktime.id).subscribe(ata => {
          this.dataSource1.data.splice(this.dataSource.data.indexOf(element), 1);
          this.dataSource1.paginator = this.paginator;
        });
      }
    });
  }

  displayCol() {
    this.displayedColumns = ['jour', 'debut', 'fin', 'jour_férié', 'validate'];
  }

  displayCol1() {
    this.displayedColumns = this.displayedColumns1;
  }
}
