import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorarkrafteComponent } from './honorarkrafte.component';

describe('HonorarkrafteComponent', () => {
  let component: HonorarkrafteComponent;
  let fixture: ComponentFixture<HonorarkrafteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorarkrafteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonorarkrafteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
