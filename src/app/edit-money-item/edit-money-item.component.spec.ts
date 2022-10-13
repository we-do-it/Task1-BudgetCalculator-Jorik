import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoneyItemComponent } from './edit-money-item.component';

describe('EditMoneyItemComponent', () => {
  let component: EditMoneyItemComponent;
  let fixture: ComponentFixture<EditMoneyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMoneyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMoneyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
