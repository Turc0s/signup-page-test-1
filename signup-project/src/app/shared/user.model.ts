export class User {
    public firstName: string;
    public lastName: string;
    public userName: string;
    public email: string;
    public password: any;

    constructor(fname: string, lname: string, uname: string, email: string) {
        this.firstName = fname;
        this.lastName = lname;
        this.userName = uname;
        this.email = email;
    }
}

