import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPaperComponent } from './skill-paper.component';

describe('SkillComponent', () => {
  let component: SkillPaperComponent;
  let fixture: ComponentFixture<SkillPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillPaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillPaperComponent);
    component = fixture.componentInstance;

    component.skill = {
      content: 'Mock content for testing'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
