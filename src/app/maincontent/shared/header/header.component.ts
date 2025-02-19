import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateFunctionService } from '../../translate-function.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  changeLangGlob = inject(TranslateFunctionService);

  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
