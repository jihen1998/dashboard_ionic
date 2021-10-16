import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/UserService/user.service';
import {CookieService} from 'ngx-cookie-service';
import {MenuController} from '@ionic/angular';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'design_app', class: '' },
    { path: '/commandes-en-atente', title: 'commandes en attente',  icon: 'education_atom', class: '' },
    { path: '/commandes-en-cours', title: 'commandes en cours',  icon: 'location_map-big', class: '' },
    { path: '/commandes-termine', title: 'commandes termine',  icon: 'ui-1_bell-53', class: '' },
    { path: '/commandes-archive', title: 'commandes archive',  icon: 'users_single-02', class: '' },
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
  constructor(private us: UserService, private cookie: CookieService) { }

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
}
