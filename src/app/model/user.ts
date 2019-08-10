export class User {
  id: number = 0;
  name: {first: string, last: string} = {
    first: 'Nobody',
    last: 'Jack'
  }
  isActive: boolean = false;
  balance?:string;
  favoriteFruit?:string;
  age: number = 18;
  email: string = 'nobody@gmail.com';
  phone: string = '00000000';
}
