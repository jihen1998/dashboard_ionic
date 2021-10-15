import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CodeReduction} from '../../Models/code-reduction';
import {CodeRedService} from '../../Services/CodeRedService/code-red.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<UserManagementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CodeReduction,
              private dialog: MatDialog, private crs: CodeRedService) { }

  user = this.data.user;

  ngOnInit(): void {
  }

}
