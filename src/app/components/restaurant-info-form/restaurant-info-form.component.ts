import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RestaurantInfo} from '../../Models/restaurant-info';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {RestaurantInfoService} from '../../Services/RestaurantInfoService/restaurant-info.service';
import {BackConfirmationComponent} from '../back-confirmation/back-confirmation.component';
import {ImageService} from '../../Services/imageService/image.service';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from '../../Services/UserService/user.service';
import {User} from '../../Models/user';

@Component({
  selector: 'app-restaurant-info-form',
  templateUrl: './restaurant-info-form.component.html',
  styleUrls: ['./restaurant-info-form.component.css']
})
export class RestaurantInfoFormComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<RestaurantInfoFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RestaurantInfo, private dialog: MatDialog,
              private rs: RestaurantInfoService, private imgs: ImageService,
              private cookie: CookieService, private us: UserService) {
  }

  ri = new RestaurantInfo();
  newrestau: RestaurantInfo[] = [];
  logo = '';
  selectedFiles: FileList;
  allUsers: User[] = [];
  selected = 1;

  ngOnInit(): void {
    if (!this.data) {
      this.data = this.ri;
    }
    this.us.all().subscribe((users: User[]) => {
      this.allUsers = users;
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
        this.data.nom_restaurant = f.value.nom_restaurant;
        this.data.address = f.value.address;
        this.data.tel = f.value.tel;
        this.data.longitude = 256155;
        this.data.latitude = 51151;
        this.data.public_key_stripe = f.value.public_key_stripe;
        this.data.secret_key_stripe = f.value.secret_key_stripe;
        this.data.public_key_paypal = f.value.public_key_paypal;
        this.data.secret_key_paypal = f.value.secret_key_paypal;
        this.data.num_siret = f.value.num_siret;
        this.data.num_siren = f.value.num_siren;
        this.data.numero_tva = f.value.numero_tva;
        this.data.num_tva_intercommunautaire = f.value.num_tva_intercommunautaire;
        this.data.user_id = 1;
        if (this.data === this.ri) {
          // add new restau
          this.rs.add(this.data).subscribe((data: RestaurantInfo) => {
            this.newrestau.push(data);
            const dialogref1 = this.dialog.open(BackConfirmationComponent, dialogConfig);
            dialogref1.afterClosed().subscribe((retour1: boolean) => {
              if (retour1 === false) {
                this.matdialogref.close(this.newrestau);
              } else {
                f.form.reset();
              }
            });
          });
        } else {
          // update
          this.data.nom_restaurant = f.value.nom_restaurant;
          this.data.address = f.value.address;
          this.data.tel = f.value.tel;
          this.data.public_key_stripe = f.value.public_key_stripe;
          this.data.secret_key_stripe = f.value.secret_key_stripe;
          this.data.public_key_paypal = f.value.public_key_paypal;
          this.data.secret_key_paypal = f.value.secret_key_paypal;
          this.data.num_siret = f.value.num_siret;
          this.data.num_siren = f.value.num_siren;
          this.data.numero_tva = f.value.numero_tva;
          this.data.num_tva_intercommunautaire = f.value.num_tva_intercommunautaire;
          this.data.logo = this.logo;
          this.rs.update(this.data).subscribe((data: RestaurantInfo) => {
            this.matdialogref.close(this.data);
          });
        }
      }

    });
  }

  uploadImages(e) {
    this.selectedFiles = e.target.files;
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(this.selectedFiles[i]);
    }
  }

  private upload(selectedFile: File) {
    const formData: FormData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    const response = this.imgs.uploadimg(formData).subscribe((d: string) => {
      this.logo = d;
    }, error => {
      this.logo = (error.error.text);
    });
  }

  onclose(f: NgForm) {

  }
}
