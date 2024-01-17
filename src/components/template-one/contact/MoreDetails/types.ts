import { IProperty } from "@/types/property";

export interface IMoreDetailsCommon {
  property: IProperty
}

export interface IFormValues {
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
}

export interface IFormErrors {
  name?: boolean,
  email?: boolean,
  phone?: boolean,
  subject?: boolean,
  message?: boolean
}