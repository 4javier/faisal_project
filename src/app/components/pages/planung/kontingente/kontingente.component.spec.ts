import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontingenteComponent } from './kontingente.component';

describe('KontingenteComponent', () => {
  let component: KontingenteComponent;
  let fixture: ComponentFixture<KontingenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontingenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontingenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
