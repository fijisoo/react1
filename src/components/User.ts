export class User {
    constructor(public name: string, public surname: string, public age: number){}
    showUser(){
        return {
            name: this.name,
            surname: this.surname,
            age: this.age
        }
    }
}