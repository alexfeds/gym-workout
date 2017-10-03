import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicepsBenchComponent } from './biceps-bench.component';

describe('BicepsBenchComponent', () => {
  let component: BicepsBenchComponent;
  let fixture: ComponentFixture<BicepsBenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicepsBenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicepsBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
