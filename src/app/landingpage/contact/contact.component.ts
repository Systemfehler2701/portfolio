import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(public toastService: ToastService) { }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;

  post = {
    endPoint: 'https://marnie-lindenthal.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(form: NgForm) {
    if (form.form.valid && form.submitted && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            form.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.showSuccess(),
        });
    } else if (form.submitted && form.form.valid && this.mailTest) {

      form.resetForm();
    }
  }

  showSuccess() {
    this.toastService.show('Message send!');
    Aos.refresh();
  }
}
