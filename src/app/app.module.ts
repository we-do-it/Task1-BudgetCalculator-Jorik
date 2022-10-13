import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InputSectionComponent} from './input-section/input-section.component';
import {BudgetComponent} from './budget/budget.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {IncomeComponent} from './income/income.component';
import {MoneyItemComponent} from './money-item/money-item.component';
import {FormsModule} from "@angular/forms";
import {CalculatorComponent} from './calculator/calculator.component';
import {EditMoneyItemComponent} from './edit-money-item/edit-money-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    InputSectionComponent,
    BudgetComponent,
    ExpensesComponent,
    IncomeComponent,
    MoneyItemComponent,
    CalculatorComponent,
    EditMoneyItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    EditMoneyItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
