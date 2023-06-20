export class User {
    id: String;
    name : String;
    userName : String;
    email : String;
    verified : Boolean;
    contact : String;
    endDate: BigInt | [];

    constructor(id: String, name: String, userName: String, email: String, verified: Boolean, contact: String, endDate: BigInt | []) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.verified = verified;
        this.contact = contact;
        this.endDate = endDate;
    }
}