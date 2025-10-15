import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPage } from './signal-page';

describe('SignalPage', () => {
  let component: SignalPage;
  let fixture: ComponentFixture<SignalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
