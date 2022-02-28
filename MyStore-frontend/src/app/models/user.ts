export class User {
  fullName: string;
  address: string;
  creditCardNumber?: string;
  city: string;
  email: string;
  constructor() {
    this.fullName = '';
    this.address = '';
    this.creditCardNumber = '';
    this.city = '';
    this.email = '';
  }
}
