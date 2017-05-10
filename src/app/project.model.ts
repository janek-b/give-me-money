export class Project {
  progress: number = 0;

  constructor(public title: string, public creator: string, public description: string, public goal: number, public purpose: string, public rewards: string, public category: string, public image_src: string) {}
}