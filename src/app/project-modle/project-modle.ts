import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modle',
  standalone: false,
  templateUrl: './project-modle.html',
  styleUrl: './project-modle.css'
})
export class ProjectModle {
  project = {} as Project;
  constructor(public bsModalRef:BsModalRef){

  } 
}
