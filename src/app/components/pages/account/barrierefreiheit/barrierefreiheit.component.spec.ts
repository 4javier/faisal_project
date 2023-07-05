import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrierefreiheitComponent } from './barrierefreiheit.component';

describe('BarrierefreiheitComponent', () => {
  let component: BarrierefreiheitComponent;
  let fixture: ComponentFixture<BarrierefreiheitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrierefreiheitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrierefreiheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
