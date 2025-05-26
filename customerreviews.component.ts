import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customerreviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customerreviews.component.html',
  styleUrls: ['./customerreviews.component.scss']
})
export class CustomerreviewsComponent {
  testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi, India',
      message: 'The campsite was clean and well maintained. It was an amazing weekend getaway!',
      avatar: 'https://i.pravatar.cc/150?img=32',
      rating: 4.5
    },
    {
      name: 'Rahul Mehta',
      location: 'Mumbai, India',
      message: 'Great food, great service, and peaceful surroundings. Would definitely recommend.',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5
    },
    {
      name: 'Anjali Verma',
      location: 'Bangalore, India',
      message: 'Riverside camp was breathtaking. Perfect mix of adventure and relaxation.',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 4
    }
  ];
}
