import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTest } from './rxjs-test';

describe('RxjsTest', () => {
  let component: RxjsTest;
  let fixture: ComponentFixture<RxjsTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
