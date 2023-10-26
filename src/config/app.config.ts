interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Create bookings', 'Read bookings', 'Update own user information'],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage cars', 'Manage bookings', 'Manage operations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ec0c505c-b9f4-43a2-8955-7468d6fa9572',
};
