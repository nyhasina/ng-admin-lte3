import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPasswordRootComponent } from './set-password-root.component';

describe('SetPasswordRootComponent', () => {
  let component: SetPasswordRootComponent;
  let fixture: ComponentFixture<SetPasswordRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPasswordRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPasswordRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
