export default class ViewUserDTO {

    id: number;
    name: string;
    email: string;
    
    constructor(name: string, id: number, email: string) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}