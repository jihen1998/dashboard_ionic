import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Plat} from '../../Models/plat';
import {PlatService} from '../../Services/platService/plat.service';
import {NgForm} from '@angular/forms';
import {ImageService} from '../../Services/imageService/image.service';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styleUrls: ['./plat-form.component.css']
})
export class PlatFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<PlatFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Plat, private dialog: MatDialog,
              private ps: PlatService, private imgs: ImageService) {
  }
  @ViewChild('image') image: ElementRef;

  plat = new Plat();
  url = [];
  selectedFiles: FileList;
  src = '';
  newplats: Plat[] = [];
  loading_img = false;

  ngOnInit(): void {
    if (!this.data) {
      this.data = this.plat;
    } else {
      this.loading_img = true;
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
        if (this.data === this.plat) {
          this.data.nom = f.value.nom;
          this.data.description = f.value.description;
          this.data.prix = f.value.prix;
          this.data.image = this.src;
          this.ps.addplat(this.data).subscribe((d: Plat) => {
            this.newplats.push(d);
            const dialogref1 = this.dialog.open(BackConfirmationComponent, dialogConfig);
            dialogref1.afterClosed().subscribe((retour1: boolean) => {
              if (retour1 === false) {
                this.matdialogref.close(this.newplats);
              } else {
                this.src = '';
                this.reset();
                f.form.reset();
              }
            });
          });
        } else { // edit plat
          this.data.nom = f.value.nom;
          this.data.description = f.value.description;
          this.data.prix = f.value.prix;
          this.data.image = this.src;
          this.ps.updateplat(this.data).subscribe(data => {
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
    this.loading_img = false;
    this.selectedFiles = e.target.files;
    this.upload(this.selectedFiles[0]);
  }

  private upload(selectedFile: File) {
    const formData: FormData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    const response = this.imgs.uploadimg(formData).subscribe((d: string) => {
      this.src = d;
      this.loading_img = true;
    }, error => {
      this.src = error.error.text;
      this.loading_img = true;
    });
  }
}
