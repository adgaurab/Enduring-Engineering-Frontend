import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MypostComponent } from './mypost.component';

describe('MypostComponent', () => {
  let component: MypostComponent;
  let fixture: ComponentFixture<MypostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MypostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
