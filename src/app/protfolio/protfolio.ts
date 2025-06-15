import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Projects } from '../_service/projects';

@Component({
  selector: 'app-protfolio',
  standalone: false,
  templateUrl: './protfolio.html',
  styleUrl: './protfolio.css'
})
export class Protfolio implements OnInit {

  projects = {} as Project[];
  
    constructor(private titleService: Title , private projectService: Projects) {
    this.titleService.setTitle('Amar Amer - Protfolio');
 }
   ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
