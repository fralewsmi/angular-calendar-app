import {Category} from './category';

export interface Day {
  value: number,
  name: string,
  isCurrentDay: boolean,
  category?: Category
}
