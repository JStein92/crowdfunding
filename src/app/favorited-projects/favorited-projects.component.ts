import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorited-projects',
  templateUrl: './favorited-projects.component.html',
  styleUrls: ['./favorited-projects.component.css'],
  providers:[ProjectService]
})
export class FavoritedProjectsComponent implements OnInit {
  projectToShow;
  favoritedProjects :FirebaseListObservable<any[]>;
  constructor(private router:Router, private projectService : ProjectService) { }


  ngOnInit() {
    this.favoritedProjects = this.projectService.getFavoritedProjects();
    //console.log(this.favoritedProjects);
  }

  showDetails(projectToShow){
    this.router.navigate(['projects',projectToShow.$key]);
  }

}
