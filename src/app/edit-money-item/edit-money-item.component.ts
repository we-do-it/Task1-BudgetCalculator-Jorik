import {Component, Inject, OnInit} from '@angular/core';
import {BudgetItem} from "../../models/budget-item.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-money-item',
  templateUrl: './edit-money-item.component.html',
  styleUrls: ['./edit-money-item.component.css']
})
export class EditMoneyItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditMoneyItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {
  }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }
}
