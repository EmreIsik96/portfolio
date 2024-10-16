import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})

export class ContactComponent {
  @ViewChild('privacySpan') privacySpan!: ElementRef;
  accepted: boolean = false; 

  http = inject(HttpClient)

  checked()
  {
    this.accepted = true; 
  }

  checkPrivacy(){
    this.privacySpan.nativeElement.style.display = 'block';
  }

  scrollToHomepage() {
    const element = document.getElementById('homepageID');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  mailTest = false;

  post = {
    endPoint: 'https://emre-isik.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (this.contactData.checkbox == true) {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => alert('send post complete'),
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
  
        ngForm.resetForm();
      }
    }
  }
}
