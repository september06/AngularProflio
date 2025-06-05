import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-protfolio',
  standalone: false,
  templateUrl: './protfolio.html',
  styleUrl: './protfolio.css'
})
export class Protfolio {
     constructor(private titleService: Title) {
    this.titleService.setTitle('Amar Amer - Protfolio');
 }

}
