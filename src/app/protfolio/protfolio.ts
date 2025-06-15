import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
@Component({
  selector: 'app-protfolio',
  standalone: false,
  templateUrl: './protfolio.html',
  styleUrl: './protfolio.css'
})
export class Protfolio {

  project:Project = {
    id: 0,
    name: 'Amar Amer',
    summary: 'A portfolio website to showcase my projects and skills.',
    description:"",
    projectLink:"",
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    picture:[]
  };

    constructor(private titleService: Title) {
    this.titleService.setTitle('Amar Amer - Protfolio');
 }

}
