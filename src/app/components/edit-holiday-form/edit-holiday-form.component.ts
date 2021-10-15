import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Holiday} from '../../Models/holiday';
import {HolidayService} from '../../Services/HolidayService/holiday.service';
import {RestaurantInfo} from '../../Models/restaurant-info';
import {RestaurantInfoService} from '../../Services/RestaurantInfoService/restaurant-info.service';
import {DatePipe} from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-holiday-form',
  templateUrl: './edit-holiday-form.component.html',
  styleUrls: ['./edit-holiday-form.component.css']
})
export class EditHolidayFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Holiday, private datepipe: DatePipe,
              private matdialogref: MatDialogRef<EditHolidayFormComponent>, private dialog: MatDialog,
              private hs: HolidayService, private rs: RestaurantInfoService) { }

  date = new Date();
  ngOnInit(): void {
    this.date = new Date(this.data.holiday);
    console.log(this.date);
  }

  submitHoliday() {
    console.log(this.data);
    this.hs.edit(this.data).subscribe((d: Holiday) => {
      this.rs.myRestau().subscribe((r: RestaurantInfo[]) => {
        this.rs.affectRestauToHoliday(d.id, r[0].id).subscribe(retour => {
          this.matdialogref.close(d);
        });
      });
    });
  }

  getHolidayDate() {
    this.data.holiday = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    console.log(this.data.holiday);
  }

  onclose() {
    this.matdialogref.close();
  }
}
