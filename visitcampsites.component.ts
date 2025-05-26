import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visitcampsites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitcampsites.component.html',
  styleUrl: './visitcampsites.component.scss',
})
export class VisitcampsitesComponent {
  cities = [
    {
      title: 'Kullu Manali',
      image: 'kullu manali.png',
      description: `Kullu Manali is one of the best places to visit in India. The Camp Exotica is a perfect weekend getaway
                option located in Kullu in the Manali district of Himachal Pradesh. The location of these tents gives a
                panoramic view of the surrounding mountains. The food provided is of fine quality, and the incredible
                view will simply leave you in awe of this adventure. The spread of lush greenery, the excitement of a stream
                nearby, and the host of thrilling adventures make camping all the more fun. Enjoy the bliss of the
                mountains or try skiing, trekking, rock climbing, river crossing, paragliding, bonfire, and much more.`,
      reverse: false
    },
    {
      title: 'Dehradun',
      image: 'Dehradun.png',
      description: `Camping in Dehradun offers beautiful surroundings and the best ways to experience lush greenery. Away
                from the hustle and bustle of the city, Dehradun allows you to camp in the lap of mountains and admire the
                flawless panoramic spectacle. There are numerous camps that have been set up with different fin amenities. 
                You can experience an unforgettable adventure camping and alpine trek in the Garhwal Himalayas. The tranquil 
                ambiance here makes the place perfect for a family vacation.`,
      reverse: true
    },
    {
      title: 'Rishikesh',
      image: 'Rishikesh.png',
      description: `When it comes to camping in Rishikesh, the luxury Swiss tent has to be on the list! A perfect camp for
                adventure enthusiasts. Operating with an inventory of 26 units, including 18 luxury Swiss tents and 8
                cemented rooms, this campsite offers a swimming pool and mountain view. Camping in Rishikesh provides a
                comfortable and rejuvenating holiday in the Himalayas, reducing your stress and letting you enjoy the
                freshness of nature under the twinkling stars.`,
      reverse: false
    },
    {
      title: 'Jaisalmer',
      image: 'Jaisalmer.png',
      description: `The only campsite in the desert among this list of camping destinations in India. You should consider
                camping here only in winter, as this place is extremely hot during summer. An ideal location for an offbeat
                weekend destination, Winds Desert Camp has long been a favorite destination for vacationers looking for a desert
                camp in Jaisalmer. It provides a high level of hospitality and luxury while remaining easily accessible, only
                half an hour from both the Jaisalmer Airport and the Jaisalmer Railway Station.`,
      reverse: true
    }
  ];
}