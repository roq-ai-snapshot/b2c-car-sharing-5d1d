import { BookingInterface } from 'interfaces/booking';
import { OperationsInterface } from 'interfaces/operations';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  license_plate: string;
  location?: string;
  status: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  operations?: OperationsInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    operations?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  location?: string;
  status?: string;
  company_id?: string;
}
