import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
   profileImagePath = "../../assets/2.jpg";
   constructor(private titleService: Title) {
    this.titleService.setTitle('Amar Amer - Home');
  }

}
