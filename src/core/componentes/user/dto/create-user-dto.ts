export default class UserDTO {

    name: string;
    email: string;
    password: string;
    
    constructor(name: string, password: string, email: string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
}