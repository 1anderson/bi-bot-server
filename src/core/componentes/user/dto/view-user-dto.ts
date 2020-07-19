export default class ViewUserDTO {

    id: number;
    name: string;
    email: string;
    steamID: string

    constructor(name: string, id: number, email: string, steamID: string) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.steamID = steamID
    }
}