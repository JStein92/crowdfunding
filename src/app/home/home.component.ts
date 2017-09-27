import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Reward } from '../reward.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import {ProjectPipe} from '../project.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProjectService]
})
export class HomeComponent implements OnInit {
  filterByGoal : string = "allGoals";
  projects : FirebaseListObservable<any[]>;
  constructor(private router : Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

  showDetails(projectToShow){
    this.router.navigate(['projects',projectToShow.$key]);
  }

  onGoalChange(optionFromMenu){
    this.filterByGoal = optionFromMenu;
  }

}
