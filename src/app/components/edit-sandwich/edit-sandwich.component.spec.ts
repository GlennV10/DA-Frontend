import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSandwichComponent } from './edit-sandwich.component';

describe('EditSandwichComponent', () => {
  let component: EditSandwichComponent;
  let fixture: ComponentFixture<EditSandwichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSandwichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
