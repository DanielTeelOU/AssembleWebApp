import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableFilteringComponent } from './table-filtering.component';

describe('TableFilteringComponent', () => {
  let component: TableFilteringComponent;
  let fixture: ComponentFixture<TableFilteringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
