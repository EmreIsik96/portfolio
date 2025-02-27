import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateFunctionService } from '../translate-function.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {

  changeLangGlob = inject(TranslateFunctionService);

  refencesEn = [
    {
      name: 'Batool Zamani',
      reference: `I worked on a project with Emre and was impressed by his work style.
      He is extremely meticulous and detail-oriented in designing his pages.
      Emre is always clear in his approach, as he actively seeks solutions and continuously develops himself.`,
      picture: "./assets/img/references/batoolZamani.png"
    },
    {
      name: 'Sebastian Rothe',
      reference: `I had the opportunity to work with Emre on a project at the Developer Akademie (DA) and was impressed by his positive commitment and teamwork skills.
      He brings valuable competencies and is always ready to take on new challenges.
      His quick comprehension and proactive approach significantly contribute to the team's success.`,
      picture: "./assets/img/references/sebastianRothe.png"
    },
    {
      name: 'Enver Shala',
      reference: `Emre Isik was one of my teammates during the JOIN project.
      He was reliable and communicative, making collaboration very enjoyable.
      He is someone I would gladly work with again at any time.`,
      picture: "./assets/img/references/enverShala.png"
    },
  ];

  refencesDe = [
    {
      name: 'Batool Zamani',
      reference: `Ich habe mit Emre an einem Projekt gearbeitet und war von seinem Arbeitsstil begeistert. 
      Er agiert äußerst sorgfältig und detailgenau bei der Gestaltung seiner Seiten. 
      Emre ist stets klar in seinen Ansätzen, da er aktiv nach Lösungen sucht und sich kontinuierlich weiterentwickelt.`,
      picture: ""
    },
    {
      name: 'Sebastian Rothe',
      reference: `Ich hatte die Gelegenheit, mit Emre an einem Projekt in der Developer Akademie (DA) zu arbeiten, 
      und war von seinem positiven Engagement und seiner Teamfähigkeit beeindruckt. 
      Er bringt wertvolle Kompetenzen mit und ist stets bereit, neue Herausforderungen anzunehmen. 
      Seine schnelle Auffassungsgabe und proaktive Herangehensweise tragen erheblich zum Teamerfolg bei.`,
      picture: ""
    },
    {
      name: 'Enver Shala',
      reference: `Emre Isik war einer meiner Team-Kollegen während des JOIN Projekts. 
      Er war zuverlässig & kommunikativ, so dass die Zusammenarbeit sehr angenehm war. 
      Er ist eine Person, mit der ich weitere Zusammenarbeiten jederzeit begrüßen würde.`,
      picture: ""
    },
  ];

  currentIndex = 0;

  previousReference() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.refencesEn.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.refencesEn.length;
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
