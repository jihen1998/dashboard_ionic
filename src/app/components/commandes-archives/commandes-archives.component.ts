import {Component, OnInit, ViewChild} from '@angular/core';
import {Commande} from '../../Models/commande';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {CommandesService} from '../../Services/Commandes/commandes.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailleCommandeComponent} from '../detaille-commande/detaille-commande.component';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-commandes-archives',
  templateUrl: './commandes-archives.component.html',
  styleUrls: ['./commandes-archives.component.css']
})
export class CommandesArchivesComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  listecommandes: Commande[] = [];
  displayedColumns: string[] = ['nom', 'numero_de_telephone', 'détailles de commande', 'prix_total'];
  dataSource = new MatTableDataSource(this.listecommandes);

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
      // affecter les commandes archivés au datasource.data
        this.dataSource.data = this.listecommandes.filter(c => c.status == 'traite');
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
