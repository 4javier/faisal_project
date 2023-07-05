import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpartnerComponent } from './eventpartner.component';

describe('EventpartnerComponent', () => {
  let component: EventpartnerComponent;
  let fixture: ComponentFixture<EventpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventpartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
