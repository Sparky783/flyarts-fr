import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SkillComponent } from '../skill/skill.component';

@Component({
    selector: 'app-skills',
    imports: [
        CommonModule,
        SkillComponent
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    @Input('skills') skills: any;
}
