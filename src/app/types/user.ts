export class User {

    public firstName: String;
    public lastName: String;
    public country: String;
   
   
    constructor(user?: User | UserView | any){
   
      if(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.country = user.country;
      }
    }
   }
   export class UserView extends User {
    constructor(user?: User | UserView | any) {
      super(user);
    }
   }
   
   