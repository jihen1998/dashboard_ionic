import {Component, Inject, OnInit} from '@angular/core';
import {ImageService} from '../../Services/imageService/image.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Categorie} from '../../Models/categorie';
import {NgForm} from '@angular/forms';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';
import {CategorieService} from '../../Services/CategorieService/categorie.service';

@Component({
  selector: 'app-upload-image-form',
  templateUrl: './upload-image-form.component.html',
  styleUrls: ['./upload-image-form.component.css']
})
export class UploadImageFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<UploadImageFormComponent>, private dialog: MatDialog,
              private imgs: ImageService, @Inject(MAT_DIALOG_DATA) public data: Categorie,
              private cs: CategorieService) { }
  url = [];
  selectedFiles: FileList;
  src = '';

  ngOnInit(): void {
  }

  onsubmit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
          this.data.img =  this.src;
          console.log(this.data);
          this.cs.editCateg(this.data).subscribe((categ: Categorie) => {
            this.matdialogref.close(this.data);
          });
      }
    });
  }

  onclose() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
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
      console.log('upload image success');
      this.src = d;
    }, error => {
      this.src = error.error.text;
    });
  }

}
