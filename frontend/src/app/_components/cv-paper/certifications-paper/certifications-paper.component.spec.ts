import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsPaperComponent } from './certifications-paper.component';

describe('CertificationsPaperComponent', () => {
  let component: CertificationsPaperComponent;
  let fixture: ComponentFixture<CertificationsPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsPaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
