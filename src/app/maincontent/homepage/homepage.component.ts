import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  scrollToContact() {
    const element = document.getElementById("contactButton");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}
