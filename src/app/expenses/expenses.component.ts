import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItem} from "../../models/budget-item.model";
import {EditMoneyItemComponent} from "../edit-money-item/edit-money-item.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateEvent} from "../income/income.component";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onDelete(item: BudgetItem) {
    this.delete.emit(item);
  }

  onEdit(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditMoneyItemComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}
