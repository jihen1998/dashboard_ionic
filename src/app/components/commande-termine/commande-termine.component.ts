import {Component, OnInit, ViewChild} from '@angular/core';
import {Commande} from '../../Models/commande';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {CommandesService} from '../../Services/Commandes/commandes.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailleCommandeComponent} from '../detaille-commande/detaille-commande.component';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-commande-termine',
  templateUrl: './commande-termine.component.html',
  styleUrls: ['./commande-termine.component.css']
})
export class CommandeTermineComponent implements OnInit {
  listecommandes: Commande[] = [];
  listecommandes1: Commande[] = [];
  displayedColumns: string[] = ['nom', 'numero_de_telephone', 'détailles de commande', 'prix_total'];
  dataSource = new MatTableDataSource(this.listecommandes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private commandService: CommandesService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // get all commandes
    this.commandService.getAll().subscribe((data: Commande[]) => {
      this.listecommandes = Object.assign(this.listecommandes, data);
      // affecter les commandes en cours au datasource.data
      const nowdate = new Date();
      nowdate.setHours(0, 0, 0, 0);
      for (const c of this.listecommandes) {
        const date = new Date(c.created_at);
        date.setHours(0, 0, 0, 0);
        if (c.status == 'traite' && (date.valueOf() - nowdate.valueOf()) == 0) {
          this.listecommandes1.push(c);
        }
        this.dataSource.data = this.listecommandes1;
      }
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

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
