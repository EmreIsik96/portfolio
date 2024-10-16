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
      name: 'Batool Zamani',
      reference: `Ich habe mit Emre an einem Projekt gearbeitet und war von seinem Arbeitsstil begeistert. 
                  Er agiert äußerst sorgfältig und detailgenau bei der Gestaltung seiner Seiten. 
                  Emre ist stets klar in seinen Ansätzen, da er aktiv nach Lösungen sucht und sich kontinuierlich weiterentwickelt.`,
    },
    {
      name: 'Sebastian Rothe',
      reference: `Ich hatte die Gelegenheit, mit Emre an einem Projekt in der Developer Akademie (DA) zu arbeiten, 
      und war von seinem positiven Engagement und seiner Teamfähigkeit beeindruckt. 
      Er bringt wertvolle Kompetenzen mit und ist stets bereit, neue Herausforderungen anzunehmen. 
      Seine schnelle Auffassungsgabe und proaktive Herangehensweise tragen erheblich zum Teamerfolg bei.`,
    },
    {
      name: 'bla3',
      reference: 'richtigCool3',
    },
  ];

  currentIndex = 0;

  previousReference() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.refences.length - 1;
    } else {
      this.currentIndex--;
    }
  }
  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.refences.length;
    document.getElementById;
  }
  getEllipseSrc(index: number) {
    if (this.currentIndex === index) {
      return '/assets/img/references/ellipseActive.png';
    } else {
      return './assets/img/references/ellipseInactive.png';
    }
  }
}
