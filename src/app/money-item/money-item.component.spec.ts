import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyItemComponent } from './money-item.component';

describe('MoneyItemComponent', () => {
  let component: MoneyItemComponent;
  let fixture: ComponentFixture<MoneyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
