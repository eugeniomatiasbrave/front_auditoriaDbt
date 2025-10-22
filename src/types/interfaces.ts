

export interface IMedication {
  id: number;
  name: string;
  presentation: string;
  potency: string;
  drug: string;
  laboratory: string;
  coverage: number;
  units: number;
  troquel: string;
  categoryId: number;
  description?: string;
}


export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
