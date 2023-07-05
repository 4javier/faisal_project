import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizingComponent } from './customizing.component';

describe('CustomizingComponent', () => {
  let component: CustomizingComponent;
  let fixture: ComponentFixture<CustomizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
