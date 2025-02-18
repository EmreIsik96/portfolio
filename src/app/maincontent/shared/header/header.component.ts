import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string ) {
    this.translate.use(language);
  } 

  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
