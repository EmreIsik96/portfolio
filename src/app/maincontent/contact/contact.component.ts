import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})

export class ContactComponent {

  scrollToHomepage() {
    const element = document.getElementById('homepageID');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  submit(){
    console.log(this.contactData.name);
    
  }

  inputKlicked(){
    let inputIsKlicked = true;
    if (inputIsKlicked) {
      
    }
  }
}
