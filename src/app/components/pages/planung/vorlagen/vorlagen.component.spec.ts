import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorlagenComponent } from './vorlagen.component';

describe('VorlagenComponent', () => {
  let component: VorlagenComponent;
  let fixture: ComponentFixture<VorlagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VorlagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VorlagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
