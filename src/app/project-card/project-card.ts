import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModle } from '../project-modle/project-modle';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() project ={} as Project;
  bsModalRef?: BsModalRef;
  constructor(private modelService:BsModalService) { 

  }
  openProjectModal() {
    const modaloptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
      project : this.project
      }
    }
    this.bsModalRef = this.modelService.show(ProjectModle,modaloptions);
  }

}
