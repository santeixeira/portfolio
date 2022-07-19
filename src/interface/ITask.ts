import IProject from "./IProject";

export default interface ITask {
  createdAt: string;
  timeSeconds: number;
  description: string;
  typePomodoro: string;
  project: IProject;
}
