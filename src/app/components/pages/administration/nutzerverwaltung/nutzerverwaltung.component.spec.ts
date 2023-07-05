import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutzerverwaltungComponent } from './nutzerverwaltung.component';

describe('NutzerverwaltungComponent', () => {
  let component: NutzerverwaltungComponent;
  let fixture: ComponentFixture<NutzerverwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutzerverwaltungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutzerverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
