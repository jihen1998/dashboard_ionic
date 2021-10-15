import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Categorie} from '../../Models/categorie';
import {CategorieService} from '../../Services/CategorieService/categorie.service';
import {NgForm} from '@angular/forms';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';
import {ImageService} from '../../Services/imageService/image.service';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<CategorieFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Categorie,
              private cs: CategorieService, private dialog: MatDialog,
              private imgs: ImageService) { }

  categ = new Categorie();
  newCateg: Categorie[] = [];
  src = '';
  selectedFiles: FileList;
  loading_img = false;

  ngOnInit(): void {
    if (!this.data) {
      this.data = this.categ;
    } else {
      this.src = this.data.img;
      this.loading_img = true;
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
        if (this.data === this.categ) {
          this.data.nom = f.value.nom;
          this.data.img = this.src;
          this.cs.addCateg(this.data).subscribe((data: Categorie) => {
            this.newCateg.push(data);
            const dialogref1 = this.dialog.open(BackConfirmationComponent, dialogConfig);
            dialogref1.afterClosed().subscribe((retour1: boolean) => {
              if (retour1 === false) {
                this.matdialogref.close(this.newCateg);
                // window.location.reload();
              } else {
                f.form.reset();
              }
            });
          });
        } else { // edit modif
          this.data.nom = f.value.nom;
          this.data.img = this.src;
          this.cs.editCateg(this.data).subscribe(data => {
            this.matdialogref.close(this.newCateg);
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

  uploadImages(e) {
    this.loading_img = false;
    this.selectedFiles = e.target.files;
    this.upload(this.selectedFiles[0]);
  }

  private upload(selectedFile: File) {
    const formData: FormData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    const response = this.imgs.uploadimg(formData).subscribe((d: string) => {
      this.loading_img = true;
      this.src = d;
    }, error => {
      this.src = error.error.text;
      this.loading_img = true;
    });
  }

}
