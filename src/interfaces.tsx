export interface Values {
  company: string;
  number: string;
  business: string;
  description: string;
}

export interface Errors {
  number: string;
  business: string;
  description: string;
}

export interface ObjectIndex {
  [key: string]: string;
}
