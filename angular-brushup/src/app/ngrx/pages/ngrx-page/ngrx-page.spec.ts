import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPage } from './ngrx-page';

describe('NgrxPage', () => {
  let component: NgrxPage;
  let fixture: ComponentFixture<NgrxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
