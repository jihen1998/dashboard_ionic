import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-banner',
  templateUrl: './confirmation-banner.component.html',
  styleUrls: ['./confirmation-banner.component.css']
})
export class ConfirmationBannerComponent implements OnInit {
  retour: boolean;
  constructor(private matdialogref: MatDialogRef<ConfirmationBannerComponent>) { }

  ngOnInit(): void {
  }

  confirmer(yesOrno: string) {
    if (yesOrno === 'oui') {
      this.retour = true;
      this.matdialogref.close(this.retour);
    } else {
      this.retour = false;
      this.matdialogref.close(this.retour);
    }
  }
}
