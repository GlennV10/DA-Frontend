import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSandwichComponent } from './add-sandwich.component';

describe('AddSandwichComponent', () => {
  let component: AddSandwichComponent;
  let fixture: ComponentFixture<AddSandwichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSandwichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
