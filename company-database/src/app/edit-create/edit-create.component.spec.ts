import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateComponent } from './edit-create.component';

describe('EditCreateComponent', () => {
  let component: EditCreateComponent;
  let fixture: ComponentFixture<EditCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCreateComponent]
    });
    fixture = TestBed.createComponent(EditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
