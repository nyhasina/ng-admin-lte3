import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordRootComponent } from './forgot-password-root.component';

describe('ForgotPasswordRootComponent', () => {
  let component: ForgotPasswordRootComponent;
  let fixture: ComponentFixture<ForgotPasswordRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
