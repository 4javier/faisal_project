import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPlattformComponent } from './as-plattform.component';

describe('AsPlattformComponent', () => {
  let component: AsPlattformComponent;
  let fixture: ComponentFixture<AsPlattformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPlattformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsPlattformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
