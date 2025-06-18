import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
   constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Amar Amer - Resume');
 }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Amar_Amer_Resume.pdf');
    link.setAttribute('download', 'Amar_Amer_Resume.pdf');
    link.click();
    link.remove();
  }

}
