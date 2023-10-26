import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface OperationsInterface {
  id?: string;
  task: string;
  status: string;
  assigned_to: string;
  car_id: string;
  start_time?: any;
  end_time?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface OperationsGetQueryInterface extends GetQueryInterface {
  id?: string;
  task?: string;
  status?: string;
  assigned_to?: string;
  car_id?: string;
}
