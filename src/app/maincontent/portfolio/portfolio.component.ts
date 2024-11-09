import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
 
  projects = [{
    images: "./assets/img/portfolioImg/join.png",
    name:  "Join",
    language: "Angular | TypeScript | HTML | CSS | Firebase",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    linkLiveTest: "https://emre-isik.de/join/index.html",
    linkGitHub: "https://github.com/EmreIsik96/join",
  },
  {
    images: "./assets/img/portfolioImg/polloLoco.png",
    name: "El Pollo Loco",
    language: "JavaScript | HTML | CSS",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    linkLiveTest: "https://emre-isik.de/elPolloLoco",
    linkGitHub: "https://github.com/EmreIsik96/elPolloLoco",
  },
  {
    images: "./assets/img/portfolioImg/pokedex.png",
    name: "Pokèdex",
    language: "JavaScript | HTML | CSS | Api",
    description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information..",
    linkLiveTest: "https://emre-isik.de/pokedex",
    linkGitHub: "https://github.com/EmreIsik96/pokedex"
  }]
}
