import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import {ProjectService} from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers:[ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  selectedProject;
  selectedProjectKey;
  showPledge = false;
  selectedReward;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
      this.selectedProjectKey = urlParameters['key'];
      });

    this.selectedProject = this.projectService.getProjectByKey(this.selectedProjectKey);
  }

  pledgeForm(clickedReward) {
    this.showPledge = true;
    this.selectedReward = clickedReward;
  }

  cancel() {
    this.showPledge = false;
  }

  submit(pledgeAmount) {
    let key:number;
    let updatedProjectFundsRaised;
      this.projectService.getProjectByKey(this.selectedProjectKey).subscribe(dataLastEmittedFromObserver => {
      updatedProjectFundsRaised = dataLastEmittedFromObserver.fundsRaised;
                                  key = dataLastEmittedFromObserver.$key;
    })
      this.projectService.addPledge(updatedProjectFundsRaised, key, pledgeAmount);
  }
}

// updatedProject = new Project(dataLastEmittedFromObserver.name,
//                              dataLastEmittedFromObserver.managers,
//                              dataLastEmittedFromObserver.description,
//                              dataLastEmittedFromObserver.goal,
//                              dataLastEmittedFromObserver.purpose,
//                              dataLastEmittedFromObserver.totalBackers,
//                              dataLastEmittedFromObserver.dueDate,
//                              dataLastEmittedFromObserver.headerImage,
//                              dataLastEmittedFromObserver.rewards)
//                              updatedProject.fundsRaised = dataLastEmittedFromObserver.fundsRaised;
//
//                             key = dataLastEmittedFromObserver.$key;
