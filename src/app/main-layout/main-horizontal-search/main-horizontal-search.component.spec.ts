import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHorizontalSearchComponent } from './main-horizontal-search.component';

describe('MainHorizontalSearchComponent', () => {
  let component: MainHorizontalSearchComponent;
  let fixture: ComponentFixture<MainHorizontalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHorizontalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHorizontalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
