import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/UserService/user.service';
import {CookieService} from 'ngx-cookie-service';
import {MenuController} from '@ionic/angular';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationBannerComponent } from '../confirmation-banner/confirmation-banner.component';
import {AuthService} from '../../Services/Auth/auth.service';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'design_app', class: '' },
    { path: '/commandes-en-atente', title: 'commandes en attente',  icon: 'notifications_active', class: '' },
    { path: '/commandes-en-cours', title: 'commandes en cours',  icon: 'slow_motion_video', class: '' },
    { path: '/commandes-termine', title: 'commandes termine',  icon: 'done_all', class: '' },
    { path: '/commandes-archive', title: 'commandes archive',  icon: 'archive', class: '' },
    { path: '/ingredient', title: 'ingredient',  icon: 'design_bullet-list-67', class: '' },
    { path: '/modificateur', title: 'modificateur',  icon: 'text_caps-small', class: '' },
    { path: '/plat', title: 'plat',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/categorie', title: 'categorie',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/restaurant', title: 'informations du restaurant',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/restaurantmanagement', title: 'informations du restaurant',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/worktime', title: 'temps de travail',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/reduction', title: 'gérer les reductions',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/schedle', title: 'gérer le temps de travaille et les jours fériés',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/offres', title: 'gérer le offres',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/statistics', title: 'Statistiques',  icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/printerconfig', title: 'Configuration impriments',  icon: 'objects_spaceship', class: 'active active-pro' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  panelOpenState = false;
  msdigitalTest = false;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(private us: UserService, private router: Router,
     private auth: AuthService, private cookie: CookieService,
     private dialog: MatDialog) {    }
  index_menu=[1,2,3,4,5,6,7,8];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if (this.cookie.get('msdigital')) {
      this.msdigitalTest = true;
    }
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  }
  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "15%";
    dialogConfig.height = "20%";
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        this.auth.logout().subscribe(data => {
          this.cookie.deleteAll();
          this.router.navigate(['loginform']);
        });
      }
    });
  }


}
