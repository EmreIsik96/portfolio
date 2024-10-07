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
    images: "./assets/projectsOnLaptop/join.png",
    name:  "Join",
    language: "Angular | TypeScript | HTML | CSS | Firebase",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
  },
  {
    images: "./assets/projectsOnLaptop/sharkie.png",
    name: "El Pollo Loco",
    language: "JavaScript | HTML | CSS",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
  },
  {
    images: "./assets/projectsOnLaptop/pokedex.png",
    name: "Pokèdex",
    language: "JavaScript | HTML | CSS | Api",
    description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.."
  }]
}
