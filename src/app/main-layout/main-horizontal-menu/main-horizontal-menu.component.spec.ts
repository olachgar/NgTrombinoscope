import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHorizontalMenuComponent } from './main-horizontal-menu.component';

describe('MainHorizontalMenuComponent', () => {
  let component: MainHorizontalMenuComponent;
  let fixture: ComponentFixture<MainHorizontalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHorizontalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
