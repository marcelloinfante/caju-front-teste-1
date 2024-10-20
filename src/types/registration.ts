export enum StatusEnum {
  REVIEW = "REVIEW",
  APPROVED = "APPROVED",
  REPROVED = "REPROVED",
}

interface RegistrationBase {
  cpf: string;
  name: string;
  date: string;
  email: string;
}

export interface RegistrationRead extends RegistrationBase {
  id: string;
  index: number;
  status: StatusEnum;
}

export interface RegistrationUpdate extends RegistrationRead {}

export interface RegistrationCreate extends RegistrationBase {}
