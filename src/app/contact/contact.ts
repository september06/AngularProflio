import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
   constructor(private titleService: Title) {
    this.titleService.setTitle('Amar Amer - Contact');
 }

}
