import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../Services/Auth/auth.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModificateurFormComponent} from '../modificateur-form/modificateur-form.component';
import {Modificateur} from '../../Models/modificateur';
import {RegisterFormComponent} from '../register-form/register-form.component';
import {UserService} from '../../Services/UserService/user.service';
import {User} from '../../Models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  form: any[];
  isLoginFailed: boolean;
  errorMessage: string;

  constructor(private auth: AuthService, private route: Router, private cookies: CookieService,
              private cookie: CookieService, private dialog: MatDialog, private us: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.isLoginFailed = false;
    this.errorMessage = '';
    this.form = f.form.value;
    this.auth.login(this.form).subscribe((data: any) => {
      console.log(data.user.roles);
      this.auth.isloggedin = true;
      const jwtadmin = JSON.stringify(data);
      this.cookie.set('jwtadmin', JSON.parse(jwtadmin).jwtadmin);
      for (let r of data.user.roles) {
        console.log(r);
        if (r.Nom_des_roles == 'msdigital') {
          this.cookie.set('msdigital', 'msdigital');
        }
        if (r.Nom_des_roles == 'admin') {
          this.cookie.set('admin', 'admin');
        }
        if (r.Nom_des_roles == 'costumer') {
          this.cookie.set('costumer', 'costumer');
        }
      }
      this.route.navigate(['dashboard']);
    }, error => {
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
    });
  }

  resetpass(f: NgForm) {

  }

  onCreate1() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    const dialogref = this.dialog.open(RegisterFormComponent, dialogConfig);
    /*dialogref.afterClosed().subscribe((data: Modificateur) => {
      this.ms.getAll().subscribe((data1: Modificateur[]) => {
        this.listmodif = data1;
        this.dataSource.data = this.listmodif;
        this.dataSource.paginator = this.paginator;
        window.location.reload();
      });
    });*/
  }

  onclose() {

  }
}
