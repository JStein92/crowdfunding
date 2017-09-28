import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Project} from './project.model';
import {Reward} from './reward.model';
@Injectable()
export class ProjectService {

  projects : FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase)
  {
    this.projects = database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  addProject(newProject : Project){
    this.projects.push(newProject);
  }

  getProjectByKey(projectKey:string)
  {
    return this.database.object('projects/' + projectKey);
  }

  addPledge(updatedProjectFundsRaised, projectToUpdateKey, pledgeAmount){
    updatedProjectFundsRaised += parseInt(pledgeAmount);
    console.log(updatedProjectFundsRaised);
    let projectEntryInFirebase = this.getProjectByKey(projectToUpdateKey);
  //  console.log(localUpdatedProject.$key);
    projectEntryInFirebase.update({fundsRaised: updatedProjectFundsRaised})
  }

  updateProject(localUpdatedProject){
    let projectEntryInFirebase = this.getProjectByKey(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                   managers: localUpdatedProject.managers,
                                   description: localUpdatedProject.description,
                                   goal: localUpdatedProject.goal,
                                   purpose: localUpdatedProject.purpose,
                                   totalBackers: localUpdatedProject.totalBackers,
                                   dueDate: localUpdatedProject.dueDate,
                                   headerImage: localUpdatedProject.headerImage})
  }

  deleteProject(projectToDelete){
    var projectEntryInFirebase = this.getProjectByKey(projectToDelete.$key);
    projectEntryInFirebase.remove();
  }

}
