import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Modificateur} from '../../Models/modificateur';
import {ModificateurService} from '../../Services/modificateurService/modificateur.service';
import {NgForm} from '@angular/forms';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';

@Component({
  selector: 'app-modificateur-form',
  templateUrl: './modificateur-form.component.html',
  styleUrls: ['./modificateur-form.component.css']
})
export class ModificateurFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<ModificateurFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Modificateur,
              private ms: ModificateurService, private dialog: MatDialog) {
  }

  modif = new Modificateur();
  newmodif: Modificateur[] = [];

  ngOnInit(): void {
    if (!this.data) {
      this.data = this.modif;
    }
  }

  onsubmit(f: NgForm) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        // add new modif
        if (this.data == this.modif) {
          this.data.nom = f.value.nom;
          this.data.prix = f.value.prix;
          this.data.limite = f.value.limite;
          this.ms.addmodificateur(this.data).subscribe((data: Modificateur) => {
            this.newmodif.push(data);
            const dialogref1 = this.dialog.open(BackConfirmationComponent, dialogConfig);
            dialogref1.afterClosed().subscribe((retour1: boolean) => {
              if (retour1 === false) {
                this.matdialogref.close(this.newmodif);
              } else {
                f.form.reset();
              }
            });
          });
        } else { // edit modif
          this.data.nom = f.value.nom;
          this.data.prix = f.value.prix;
          this.data.limite = f.value.limite;
          this.ms.updatemodificateur(this.data).subscribe(data => {
            this.matdialogref.close(data);
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
