import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CommandesService} from '../../Services/Commandes/commandes.service';
import {Commande} from '../../Models/commande';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailleCommandeComponent} from '../detaille-commande/detaille-commande.component';
import {MatSort} from '@angular/material/sort';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {FirebaseService} from '../../Services/Firebase/firebase.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-commandes-en-atente',
  templateUrl: './commandes-en-atente.component.html',
  styleUrls: ['./commandes-en-atente.component.css']
})
export class CommandesEnAtenteComponent implements OnInit {
  constructor(private commandService: CommandesService, private datepipe: DatePipe,
              private dialog: MatDialog, private fb: FirebaseService) { }
  realTimeCommandes = [];
  listecommandes: Commande[] = [];
  displayedColumns: string[] = ['nom', 'numero_de_telephone', 'détailles de commande', 'prix_total', 'validate', 'cancel'];
  dataSource = new MatTableDataSource(this.listecommandes);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this. fb.commandes().subscribe((data: any[]) => {
      this.realTimeCommandes = data;
      // get all commandes
      this.commandService.getAll().subscribe((d: Commande[]) => {
        this.listecommandes = Object.assign(this.listecommandes, d);
        // filter commandes non vues et les affecter au datasource.data
        this.dataSource.data = this.listecommandes.filter(c => c.status === 'non_vue' && c.date_paiement == null);
        this.dataSource.paginator = this.paginator;
        let audio = new Audio();
        audio.src = '../../../src/assets/1.mp3';
        audio.load();
        audio.play();
      });
    });
  }

  detaillesCommande(commande: Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';
    dialogConfig.data = commande;
    this.dialog.open(DetailleCommandeComponent, dialogConfig);
  }

  validate(cmd: Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        cmd.status = 'en_cours';
        cmd.date_paiement = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.commandService.updateCommand(cmd).subscribe(data => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(cmd), 1);
          this.dataSource.paginator = this.paginator;
          this.realTimeCommandes.forEach(c =>  {
            if (c.idCommande == cmd.commande_id) {
              c.status = 'en_cours';
              this.fb.update(c).then(co => {
              });
            }
          });
        });
      }
    });
  }

  cancel(cmd: Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '15%';
    dialogConfig.height = '20%';
    const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
    dialogref.afterClosed().subscribe((retour: boolean) => {
      if (retour === true) {
        cmd.status = 'annulee';
        this.commandService.updateCommand(cmd).subscribe(data => {
          this.realTimeCommandes.forEach(c =>  {
            if (c.idCommande == cmd.commande_id) {
              c.status = 'annulee';
              this.fb.update(c).then(co => {
              });
            }
          });
          this.dataSource.data.splice(this.dataSource.data.indexOf(cmd), 1);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
