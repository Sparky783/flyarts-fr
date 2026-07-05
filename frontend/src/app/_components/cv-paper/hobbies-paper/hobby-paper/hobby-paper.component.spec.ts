import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyPaperComponent } from './hobby-paper.component';

describe('HobbyComponent', () => {
  let component: HobbyPaperComponent;
  let fixture: ComponentFixture<HobbyPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyPaperComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HobbyPaperComponent);
    component = fixture.componentInstance;

    component.hobby = {
      content: 'Mock content for testing'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
