import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItem} from "../../models/budget-item.model";

@Component({
  selector: 'app-money-item',
  templateUrl: './money-item.component.html',
  styleUrls: ['./money-item.component.css']
})
export class MoneyItemComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() editItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteItem() {
    this.deleteItem.emit();
  }

  onEditItem() {
    this.editItem.emit();
  }
}
