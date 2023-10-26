import * as yup from 'yup';

export const operationsValidationSchema = yup.object().shape({
  task: yup.string().required(),
  status: yup.string().required(),
  start_time: yup.date().nullable(),
  end_time: yup.date().nullable(),
  assigned_to: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
