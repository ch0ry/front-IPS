import { Component } from '@angular/core';

interface NewsItem {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newsItems: NewsItem[] = [
    {
      image: '/assets/4.png',
      title: 'Breakthrough Study Reveals Promising New Treatment for Alzheimers Disease',
      description: 'Researchers have made a breakthrough in Alzheimers disease treatment.models. Further research is needed, but this discovery marks a significant step forward in tackling this challenging disease.'
    },
    {
      image: '/assets/5.png',
      title: 'Flu outbreak.',
      description: 'During a flu outbreak, an increase in the typical symptoms of the illness is observed, including high fever, muscle aches, headache, extreme fatigue, dry cough, and nasal congestion.'
    },
    {
      image: '/assets/6.png',
      title: 'DONATE WHILE YOU CAN',
      description: 'Donation days are approaching, blood, platelets, whatever you can! Contact Us'
    },
    {
      image: '/assets/7.png',
      title: 'The use of the mask is mandatory',
      description: 'Learn about the reasons why you should wear a mask in all our facilities'
    }
  ];
}