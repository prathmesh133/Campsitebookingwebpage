import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  responseMessage = '';
  isSuccess = false;
  isError = false;

  submitForm() {
    if (
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.subject.trim() &&
      this.formData.message.trim()
    ) {
      this.isSuccess = true;
      this.isError = false;
      this.responseMessage = 'Your message has been sent successfully!';
      this.formData = { name: '', email: '', subject: '', message: '' };
    } else {
      this.isSuccess = false;
      this.isError = true;
      this.responseMessage = 'Please fill out all fields correctly.';
    }
  }

  searchQuery: string = '';

  faqs = [
    {
      question: 'How do I book a campsite?',
      answer: 'You can book a campsite by filling out the booking form with your details and preferred location.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Cancellations made 48 hours prior to arrival are fully refundable. After that, partial refunds may apply.'
    },
    {
      question: 'Are pets allowed at the campsite?',
      answer: 'Yes, we welcome pets at most of our campsites. Please check the specific location\'s pet policy.'
    }
  ];

  get filteredFaqs() {
    return this.faqs.filter(faq =>
      faq.question.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
