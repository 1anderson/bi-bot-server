export default class UserDTO {

    _name:  string;
    _email: string;
    _password: string;
    constructor(name: string, password: string, email: string) {
        this._name = name;
        this._password = password;
        this._email = email;
    }

    get name() {
         return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get password() {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }
    



}