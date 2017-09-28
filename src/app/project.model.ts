import {Reward} from './reward.model';

export class Project {
  fundsRaised: number = 0;
  favorited: boolean = false;
  constructor(public name: string,
    public managers: string[],
    public description: string,
    public goal:number,
    public purpose: string,
    public totalBackers: number,
    public dueDate: Date,
    public headerImage: string,
    public rewards: Reward[]){}
}
