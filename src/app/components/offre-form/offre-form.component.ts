import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Plat} from '../../Models/plat';
import {PlatService} from '../../Services/platService/plat.service';
import {ImageService} from '../../Services/imageService/image.service';
import {Offre} from '../../Models/offre';
import {OffreService} from '../../Services/OffreService/offre.service';
import {NgForm} from '@angular/forms';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';

@Component({
  selector: 'app-offre-form',
  templateUrl: './offre-form.component.html',
  styleUrls: ['./offre-form.component.css']
})
export class OffreFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<OffreFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Offre, private dialog: MatDialog,
              private os: OffreService, private imgs: ImageService) { }

  @ViewChild('image') image: ElementRef;

  offre = new Offre();
  selectedFiles: FileList;
  src = '';
  newoffress: Offre[] = [];

  ngOnInit(): void {
    if (!this.data) {
      this.data = this.offre;
    }
  }

  reset() {
    this.image.nativeElement.value = '';
    this.src = '';
  }

  onsubmit(f: NgForm) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        // add new plat
        if (this.data === this.offre) {
          this.data.nom = f.value.nom;
          this.data.description = f.value.description;
          this.data.prix = f.value.prix;
          this.data.image = this.src;
          this.data.isDisponible = true;
          this.os.add(this.data).subscribe((d: Offre) => {
            this.newoffress.push(d);
            const dialogref1 = this.dialog.open(BackConfirmationComponent, dialogConfig);
            dialogref1.afterClosed().subscribe((retour1: boolean) => {
              if (retour1 === false) {
                this.matdialogref.close(this.newoffress);
              } else {
                this.src = '';
                this.reset();
                f.form.reset();
              }
            });
          });
        } else { // edit modif
          this.data.nom = f.value.nom;
          this.data.description = f.value.description;
          this.data.prix = f.value.prix;
          this.data.image = this.src;
          this.os.update(this.data).subscribe(data => {
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
        this.reset();
        this.matdialogref.close();
      }
    });
  }

  uploadImages(e) {
    this.selectedFiles = e.target.files;
    this.upload(this.selectedFiles[0]);
  }

  private upload(selectedFile: File) {
    const formData: FormData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    const response = this.imgs.uploadimg(formData).subscribe((d: string) => {
      this.src = d;
    }, error => {
      this.src = error.error.text;
    });
  }

}
