import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class Projects {
projects:Project[] = [
    {id: 0, 
      name: "Ort Braude Library", 
  picture: [
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/ServerSide/serverafterconnect.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/clientSide/clientConnect.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/clientSide/serch+login.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/clientSide/search.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/clientSide/userlogin.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/clientSide/manger.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/clientSide/active.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/Visual%20Para/Requirement.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/Visual%20Para/class%20digram.PNG",
    "https://github.com/september06/Ort-Braude-Library--OBL--javafx/raw/master/image/Visual%20Para/sequnce.PNG"
],
      projectLink: "https://github.com/september06/Ort-Braude-Library--OBL--javafx/tree/master", summary: "An application for managing a library system using client-server technology over a TCP/IP connection and protocols. ",
     description: `a project within the course ‘‘Engineering Methodologies for Software Systems Development’’, it is an application for managing a library system using client-server technology over a TCP/IP connection and protocols. The duration of the project was a whole semester and was implemented using visual paradigm, Java, JavaFX, SQL and UML diagrams.
Workspace and tools :
 - Eclipse java EE IDE for Web Developers
 - MySQL
 - MySQL WORKBENCH
 - Gluon Javafx Scene Builder 
 - Visual Paradigm `,
     tags: [Tag.JAVA, Tag.JAVAFX, Tag.MYSQL, Tag.VISUALPARADIGM, Tag.TCPIP, Tag.CLIENTSERVER, Tag.UMLDIAGRAMS]},
    {id: 1, name: "Sample Angular App", picture: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, name: "Sample .Net App", picture: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]},
    {id: 3, name: "Web API Project", picture: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.ASPNET]},
    {id: 4, name: "Chrome Extension", picture: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "Mobile App", picture: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]}
  ];
  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById (id: number): Project  {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError(`Project with id ${id} not found`);
    }
    return project;
  }
}
