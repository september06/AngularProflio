import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from '../_service/projects';
import { Project } from '../_models/Project';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.featureProjects = this.projectService.getProjectById(0)  ;
  }
    featureProjects = {} as Project;
   constructor(private titleService: Title ,private projectService: Projects) {
    this.titleService.setTitle('Amar Amer - Home');
  }

}
