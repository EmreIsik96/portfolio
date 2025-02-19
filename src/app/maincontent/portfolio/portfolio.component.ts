import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { TranslatePipe, TranslateDirective, } from "@ngx-translate/core";
import { TranslateFunctionService } from '../translate-function.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {

  changeLangGlob = inject(TranslateFunctionService)

  projectsEn = [
    {
      images: './assets/img/portfolioImg/join.png',
      name: 'Join',
      language: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLiveTest: 'https://emre-isik.de/join/index.html',
      linkGitHub: 'https://github.com/EmreIsik96/join',
    },
    {
      images: './assets/img/portfolioImg/polloLoco.png',
      name: 'El Pollo Loco',
      language: 'JavaScript | HTML | CSS',
      description:
        'Jump Run game based on object oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      linkLiveTest: 'https://emre-isik.de/elPolloLoco',
      linkGitHub: 'https://github.com/EmreIsik96/elPolloLoco',
    },
    {
      images: './assets/img/portfolioImg/pokedex.png',
      name: 'Pokèdex',
      language: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      linkLiveTest: 'https://emre-isik.de/pokedex',
      linkGitHub: 'https://github.com/EmreIsik96/pokedex',
    },
  ];
  projectsDe = [
    {
      images: './assets/img/portfolioImg/join.png',
      name: 'Join',
      language: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      linkLiveTest: 'https://emre-isik.de/join/index.html',
      linkGitHub: 'https://github.com/EmreIsik96/join',
    },
    {
      images: './assets/img/portfolioImg/polloLoco.png',
      name: 'El Pollo Loco',
      language: 'JavaScript | HTML | CSS',
      description:
        'Jump-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      linkLiveTest: 'https://emre-isik.de/elPolloLoco',
      linkGitHub: 'https://github.com/EmreIsik96/elPolloLoco',
    },
    {
      images: './assets/img/portfolioImg/pokedex.png',
      name: 'Pokèdex',
      language: 'JavaScript | HTML | CSS | Api',
      description:
        'Basierend auf der PokéAPI – eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      linkLiveTest: 'https://emre-isik.de/pokedex',
      linkGitHub: 'https://github.com/EmreIsik96/pokedex',
    },
  ];

}
