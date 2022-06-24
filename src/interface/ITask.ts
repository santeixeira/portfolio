import IProject from "./IProject";

export default interface ITask {
  timeSeconds: number;
  description: string;
  typePomodoro: string;
  project: IProject;
}
