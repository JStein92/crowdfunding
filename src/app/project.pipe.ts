import { Pipe, PipeTransform } from '@angular/core';
import {Project} from './project.model';


@Pipe({
  name: 'projectPipe',
  pure: false
})
export class ProjectPipe implements PipeTransform {

  transform(input: Project[], desiredGoal) {
    let output : Project[] = [];
    if (desiredGoal === "Expensive"){
      for (let i = 0; i < input.length; i++) {
        if (input[i].goal > 20000)
        {
            output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGoal === "Inexpensive") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].goal <= 20000)
        {
            output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
