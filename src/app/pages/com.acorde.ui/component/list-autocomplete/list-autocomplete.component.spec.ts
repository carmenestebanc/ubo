import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutocompleteComponent } from './list-autocomplete.component';

describe('ListAutocompleteComponent', () => {
  let component: ListAutocompleteComponent;
  let fixture: ComponentFixture<ListAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
