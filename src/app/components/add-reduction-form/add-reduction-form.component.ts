import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Categorie} from '../../Models/categorie';
import {CategorieService} from '../../Services/CategorieService/categorie.service';
import {CodeReduction} from '../../Models/code-reduction';
import {NgForm} from '@angular/forms';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';
import {CodeRedService} from '../../Services/CodeRedService/code-red.service';
import {formatDate} from '@angular/common';
import {UserService} from '../../Services/UserService/user.service';
import {User} from '../../Models/user';

@Component({
  selector: 'app-add-reduction-form',
  templateUrl: './add-reduction-form.component.html',
  styleUrls: ['./add-reduction-form.component.css']
})
export class AddReductionFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<AddReductionFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CodeReduction,
              private dialog: MatDialog, private crs: CodeRedService,
              private us: UserService) { }

  codered = new CodeReduction();
  newCodeRed: CodeReduction[] = [];
  allus: User[] = [];
  selectedValue: string;
  date: any;

  ngOnInit(): void {
    if (!this.data) {
      this.data = this.codered;
    } else {
      this.date = new Date(this.data.date_expiration);
    }
    this.us.all().subscribe((users: User[]) => {
      this.allus = users;
    });
  }

  onsubmit(f: NgForm) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        // add new
        if (this.data === this.codered) {
          this.data.code = f.value.code;
          this.data.taux_reduction = f.value.taux_reduction;
          this.data.date_expiration = formatDate(this.date, 'yyyy/MM/dd', 'en_US');
          this.data.statut = f.value.statut;
          if (f.value.user) {
            this.data.user_id = f.value.user.id;
          }
          this.crs.add(this.data).subscribe((data: CodeReduction) => {
            this.newCodeRed.push(data);
            const dialogref1 = this.dialog.open(BackConfirmationComponent, dialogConfig);
            dialogref1.afterClosed().subscribe((retour1: boolean) => {
              if (retour1 === false) {
                this.matdialogref.close(this.newCodeRed);
              } else {
                f.form.reset();
              }
            });
          });
        } else { // edit
          this.data.code = f.value.code;
          this.data.taux_reduction = f.value.taux_reduction;
          this.data.date_expiration = formatDate(this.date, 'yyyy/MM/dd', 'en_US');
          this.data.statut = f.value.statut;
          if (f.value.user) {
            this.data.user_id = f.value.user_id;
          }
          this.crs.update(this.data).subscribe(data => {
            this.matdialogref.close(this.data);
          });
        }
      }
    });
  }

  onclose(f: NgForm) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        f.resetForm();
        this.matdialogref.close();
      }
    });
  }
}
