export default class UserDTO {

    login: string;
    email: string;
    password: string;
    steamID: string
    constructor(login: string, password: string, email: string, steamID: string) {
        this.password = password;
        this.email = email;
        this.login = login;
        this.steamID = steamID;
    }
}