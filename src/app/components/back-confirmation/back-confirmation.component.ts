import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-back-confirmation',
  templateUrl: './back-confirmation.component.html',
  styleUrls: ['./back-confirmation.component.css']
})
export class BackConfirmationComponent implements OnInit {

  retour1: boolean;
  constructor(private matdialogref: MatDialogRef<BackConfirmationComponent>) { }

  ngOnInit(): void {
  }

  confirmer(yesOrno: string) {
    if (yesOrno === 'oui') {
      this.retour1 = true;
    } else {
      this.retour1 = false;
    }
    this.matdialogref.close(this.retour1);
  }

}
