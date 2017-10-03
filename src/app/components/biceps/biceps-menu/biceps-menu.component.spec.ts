import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicepsMenuComponent } from './biceps-menu.component';

describe('BicepsMenuComponent', () => {
  let component: BicepsMenuComponent;
  let fixture: ComponentFixture<BicepsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicepsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicepsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
