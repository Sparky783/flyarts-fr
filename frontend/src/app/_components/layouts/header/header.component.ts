import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('mainMenu') mainMenuRef!: ElementRef;

  closeNavbar() {
    const menuEl = this.mainMenuRef.nativeElement;

    if (menuEl.classList.contains('show')) {
      if (typeof bootstrap !== 'undefined') {
        const bsCollapse = bootstrap.Collapse.getInstance(menuEl) || new bootstrap.Collapse(menuEl);
        bsCollapse.hide();
      } else {
        menuEl.classList.remove('show');
      }
    }
  }
}
