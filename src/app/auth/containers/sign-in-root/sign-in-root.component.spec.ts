import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRootComponent } from './sign-in-root.component';

describe('SignInComponent', () => {
  let component: SignInRootComponent;
  let fixture: ComponentFixture<SignInRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
