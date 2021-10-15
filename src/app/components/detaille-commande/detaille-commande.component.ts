import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Commande} from '../../Models/commande';
import {Plat} from '../../Models/plat';
import {PrintService, UsbDriver, WebPrintDriver} from 'ng-thermal-print';
import {Offre} from '../../Models/offre';
import {RestaurantInfoService} from '../../Services/RestaurantInfoService/restaurant-info.service';
import {RestaurantInfo} from '../../Models/restaurant-info';
import {CustomOffres} from '../../Models/custom-offres';
import {CommandesService} from '../../Services/Commandes/commandes.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-detaille-commande',
  templateUrl: './detaille-commande.component.html',
  styleUrls: ['./detaille-commande.component.css']
})
export class DetailleCommandeComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<DetailleCommandeComponent>,
              private rs: RestaurantInfoService, @Inject(MAT_DIALOG_DATA) public data: any,
              private printService: PrintService, private cs: CommandesService) {
    this.usbPrintDriver = new UsbDriver();
    this.printService.isConnected.subscribe(result => {
      this.status = result;
      if (result) {
        console.log('Connected to printer!!!');
      } else {
        console.log('Not connected to printer.');
      }
    });
  }

  restau: RestaurantInfo;
  listeplats: Plat[] = this.data.requested_plat;
  listeOffres: CustomOffres[] = this.data.custom_offres;
  listePlatsOffres: Plat[] = [];
  panelOpenState = true;
  status = false;
  usbPrintDriver: UsbDriver;
  webPrintDriver: WebPrintDriver;
  ip = '';
  id: number;


  ngOnInit(): void {
    if (this.data.id === undefined) {
      this.cs.getId(this.data.commande_id).subscribe((d: any) => {
        this.id = d;
      });
    } else {
      this.id = this.data.id;
    }
    this.rs.all().subscribe((r: RestaurantInfo[]) => {
      this.restau = r[0];
    });
    if (this.listeOffres) {
      this.listeOffres.forEach(o => {
        o.requested_plats.forEach(p => {
          this.listePlatsOffres.push(p);
        });
      });
    }
  }

  close() {
    this.matdialogref.close();
  }

  /*print() {
    this.printService.init()
      .setBold(true)
      .writeLine(this.restau.nom_restaurant)
      .setBold(false)
      .writeLine(this.restau.address)
      .writeLine('Tel: ' + this.restau.tel)
      .writeLine('-------------------------------------------')
      .writeLine('------------Adresse livraison--------------')
      .writeLine(this.data.Commande.user.nom + ' ' + this.data.Commande.user.prenom)
      .writeLine(this.data.Commande.livraison_address)
      .writeLine(this.data.Commande.livraison ? this.data.Commande.livraison_address : 'Click and Collect')
      .writeLine(this.data.Commande.user.numero_de_telephone.toString())
      .writeLine('-----------------------------------')

      .feed(4)
      .cut('full')
      .flush();
  }*/

}
