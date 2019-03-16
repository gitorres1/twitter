import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTweetComponent } from './lista-tweet.component';

describe('ListaTweetComponent', () => {
  let component: ListaTweetComponent;
  let fixture: ComponentFixture<ListaTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
