import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Userswithhistoric} from '../../Models/userswithhistoric';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Commande} from '../../Models/commande';
import {DetailleCommandeComponent} from '../detaille-commande/detaille-commande.component';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<AllTicketsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Userswithhistoric, private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'Tickets', 'date creation', 'prix'];
  dataSource = new MatTableDataSource(this.data.commandes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  tickets(ticket: Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '57%';
    dialogConfig.height = '80%';
    dialogConfig.data = ticket;
    const dialogref = this.dialog.open(DetailleCommandeComponent, dialogConfig);
  }

}
