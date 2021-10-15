import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {worktimeAndDate} from '../work-times/work-times.component';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {DatePipe} from '@angular/common';
import {WorkTimeServiceService} from '../../Services/WorkTime/work-time-service.service';
import {WorkTimes} from '../../Models/work-times';

@Component({
  selector: 'app-edit-work-time-form',
  templateUrl: './edit-work-time-form.component.html',
  styleUrls: ['./edit-work-time-form.component.css']
})
export class EditWorkTimeFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<EditWorkTimeFormComponent>, private datepipe: DatePipe,
              @Inject(MAT_DIALOG_DATA) public data: worktimeAndDate, private dialog: MatDialog,
              private ws: WorkTimeServiceService) { }

  timestart = {
    hour: this.data.date.getHours(),
    minute: this.data.date.getMinutes()
  };

  dateend = new Date(this.data.worktime.end);
  dateholiday = new Date(this.data.worktime.holiday);

  timeend = {
    hour: this.dateend.getHours(),
    minute: this.dateend.getMinutes()
  };

  ngOnInit(): void {
  }

  onsubmit(f: NgForm) {
    if (this.data.worktime.start) {
      this.data.worktime.start = this.datepipe.transform(f.value.start, 'yyyy-MM-dd') + ' ' +
        f.value.starttime.hour.toString().padStart(2, '0') + ':' +
        f.value.starttime.minute.toString().padStart(2, '0');
      this.data.worktime.end = this.datepipe.transform(f.value.end, 'yyyy-MM-dd') + ' ' +
        f.value.endtime.hour.toString().padStart(2, '0') + ':' +
        f.value.endtime.minute.toString().padStart(2, '0');
      this.data.date = f.value.start;
    } else {
      this.data.worktime.holiday = this.datepipe.transform(f.value.holiday, 'yyyy-MM-dd');
      this.data.date = f.value.holiday;
    }
    this.ws.edit(this.data.worktime).subscribe((d: WorkTimes) => {
      this.matdialogref.close(this.data);
    });
  }

  onclose(f: NgForm) {
    this.matdialogref.close();
    /*const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        f.resetForm();
        this.matdialogref.close();
      }
    });*/
  }
}
