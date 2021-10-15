import {Component, OnInit, ViewChild} from '@angular/core';
import {CommandesService} from '../../Services/Commandes/commandes.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Commande} from '../../Models/commande';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DetailleCommandeComponent} from '../detaille-commande/detaille-commande.component';
import {MatSort} from '@angular/material/sort';
import {ConfirmationBannerComponent} from '../confirmation-banner/confirmation-banner.component';
import {FirebaseService} from '../../Services/Firebase/firebase.service';

@Component({
  selector: 'app-commandes-en-cours',
  templateUrl: './commandes-en-cours.component.html',
  styleUrls: ['./commandes-en-cours.component.css']
})
export class CommandesEnCoursComponent implements OnInit {
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

  constructor(private commandService: CommandesService,
              private dialog: MatDialog, private fb: FirebaseService) { }

  ngOnInit(): void {
    this.fb.commandes().subscribe(c => {
      this.realTimeCommandes = c;
      // get all commandes
      this.commandService.getAll().subscribe((data: Commande[]) => {
        this.listecommandes = Object.assign(this.listecommandes, data);
        // affecter les commandes en cours au datasource.data
        this.dataSource.data = this.listecommandes.filter(co => co.status == 'en_cours');
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  detaillesCommande(commande: Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.panelClass = 'marginDialog';
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
        cmd.status = 'traite';
        this.commandService.updateCommand(cmd).subscribe(data => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(cmd), 1);
          this.dataSource.paginator = this.paginator;
          this.realTimeCommandes.forEach(c =>  {
            if (c.idCommande == cmd.commande_id) {
              c.status = 'traite';
              this.fb.update(c).then(co => {
              });
            }
          });
        });
      }
    });
  }

  cancel(cmd: Commande) {
    if (cmd.date_paiement == null) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.width = '15%';
      dialogConfig.height = '20%';
      const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
      dialogref.afterClosed().subscribe((retour: boolean) => {
        if (retour === true) {
          cmd.status = 'annulee';
          this.commandService.updateCommand(cmd).subscribe(data => {
            this.dataSource.data.splice(this.dataSource.data.indexOf(cmd), 1);
            this.dataSource.paginator = this.paginator;
            this.realTimeCommandes.forEach(c => {
              if (c.idCommande === cmd.commande_id) {
                c.status = 'annulee';
                this.fb.update(c).then(co => {

                });
              }
            });
          });
        }
      });
    }
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
