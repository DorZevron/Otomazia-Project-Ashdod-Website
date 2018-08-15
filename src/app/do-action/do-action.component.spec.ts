import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoActionComponent } from './do-action.component';

describe('DoActionComponent', () => {
  let component: DoActionComponent;
  let fixture: ComponentFixture<DoActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
