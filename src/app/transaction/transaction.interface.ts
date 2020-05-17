export interface ICategoryExpenses {
  value: string;
  viewValue: string;
}

export interface ICategoryIncomes {
  value: string;
  viewValue: string;
}

export interface ITransaction {
  id: number;
  amount: number;
  category: ICategory;
  description: string;
  dateTable: number;
}

export interface ICategory {
  id: number;
  type: ICategoryType;
  name: string;
}

export interface ICategoryType {
  id: number;
  name: string;
}
