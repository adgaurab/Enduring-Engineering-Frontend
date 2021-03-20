import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPOSTComponent } from './add-post.component';

describe('AddPOSTComponent', () => {
  let component: AddPOSTComponent;
  let fixture: ComponentFixture<AddPOSTComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPOSTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPOSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
