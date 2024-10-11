import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  refences = [
    {
      name: 'V. Schuster - Team Partner',
      reference: `Michael really kept the team together with his great organization and
          clear communication. We wouldn't have got this far without his
          commitment`, 
    },
    {
      name: 'bla2',
      reference: 'richtigCool2',
    },
    {
      name: 'bla3',
      reference: 'richtigCool3',
    }
  ];

  currentIndex = 0;

  previousReference() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.refences.length - 1;      
    }
    else {
      this.currentIndex --;
    }
  }
  nextReference() {
    this.currentIndex = (this.currentIndex +1) % this.refences.length;
    document.getElementById
  }
  getEllipseSrc(index: number) {
    if (this.currentIndex === index) {
      return '/assets/img/references/ellipseActive.png';
    } 
    else {
      return './assets/img/references/ellipseInactive.png'; 
    }
  }
}
