export default class UserDTO {

    login: string;
    email: string;
    password: string;
    constructor(login: string, password: string, email: string) {
        this.password = password;
        this.email = email;
        this.login = login;
    }
}