import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectLinkComponent } from './project-link.component';

describe('ProjectComponent', () => {
  let component: ProjectLinkComponent;
  let fixture: ComponentFixture<ProjectLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLinkComponent],
      providers: [
        provideRouter([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectLinkComponent);
    component = fixture.componentInstance;

    component.link = {
      content: 'Mock content for testing'
    };
    component.isDisabled = {
      content: 'Mock content for testing'
    };


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
