import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(selectedProject){
    this.projectService.updateProject(selectedProject);
  }

  beginDeletingProject(projectToDelete){
    if (confirm("REALLY?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
