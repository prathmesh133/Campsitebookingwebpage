import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bookcampsites',
  imports: [CommonModule, FormsModule],
  templateUrl: './bookcampsites.component.html',
  styleUrl: './bookcampsites.component.scss'
})
export class BookcampsitesComponent {
  formData = {
    name: '',
    email: '',
    contact: '',
    arrival: '',
    departure: '',
    persons: 1,
    location: 'Kullu Manali'
  };

  message = '';
  isSuccess = true;

  submitBooking(form: any) {
    if (form.valid) {
      this.isSuccess = true;
      this.message = 'Booking successful! We’ll contact you shortly.';
      form.resetForm();
    } else {
      this.isSuccess = false;
      this.message = 'Please fill all required fields correctly.';
    }

    setTimeout(() => {
      this.message = '';
    }, 4000);
  }
}

