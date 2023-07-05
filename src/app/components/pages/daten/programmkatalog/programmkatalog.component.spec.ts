import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammkatalogComponent } from './programmkatalog.component';

describe('ProgrammkatalogComponent', () => {
  let component: ProgrammkatalogComponent;
  let fixture: ComponentFixture<ProgrammkatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammkatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammkatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
