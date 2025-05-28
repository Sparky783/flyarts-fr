import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesPaperComponent } from './hobbies-paper.component';

describe('HobbiesComponent', () => {
  let component: HobbiesPaperComponent;
  let fixture: ComponentFixture<HobbiesPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesPaperComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HobbiesPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
