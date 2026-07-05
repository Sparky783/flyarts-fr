import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPaperComponent } from './skills-paper.component';

describe('SkillsComponent', () => {
  let component: SkillsPaperComponent;
  let fixture: ComponentFixture<SkillsPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsPaperComponent);
    component = fixture.componentInstance;

    component.skills = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
