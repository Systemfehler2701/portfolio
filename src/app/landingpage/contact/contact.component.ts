import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import Aos from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(public toastService: ToastService) { }

  showSuccess() {
    this.toastService.show('Message send!');
    Aos.refresh();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
