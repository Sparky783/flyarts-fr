import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetropieComponent } from './retropie.component';

describe('RetropieComponent', () => {
  let component: RetropieComponent;
  let fixture: ComponentFixture<RetropieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetropieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetropieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
