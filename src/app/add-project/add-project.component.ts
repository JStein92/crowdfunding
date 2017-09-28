import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
import {Reward } from '../reward.model';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectToDisplay: Project;
  constructor() { }

  ngOnInit() {
  }

  addProject(name: string, managers: string, description:string, goal:number, purpose:string,dueDate: Date, headerImage:string){

    let managersArry : string[] = [];
    managersArry.push(managers);

    let newProject :Project = new Project(name, managersArry, description, goal, purpose, 0, dueDate, headerImage, []);

    this.projectToDisplay = newProject;
  };

  addReward(tier:number,rewardName:string,rewardDescription:string){

    let newReward : Reward = new Reward(tier,rewardName,rewardDescription,0);

    this.projectToDisplay.rewards.push(newReward);
  }


}
