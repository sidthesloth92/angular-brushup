import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTodo } from './search-todo';

describe('SearchTodo', () => {
  let component: SearchTodo;
  let fixture: ComponentFixture<SearchTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
