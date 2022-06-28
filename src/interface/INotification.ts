export enum TypeNotification {
  SUCESS,
  ERRO,
  WARNING
}

export interface INotification {
  title: string;
  text: string;
  type: TypeNotification;
  id: number;
  icon: string
}
