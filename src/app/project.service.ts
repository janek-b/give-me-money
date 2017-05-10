import { Injectable } from '@angular/core';
import { Project } from "./project.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  categories: string[] = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion", "Film & Video", "Food", "Games", "Journalism", "Music", "Photography", "Publishing", "Technology", "Theater"];
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getCategories() {
    return this.categories;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }


}