export default class User{
    constructor(public name: string, public surname: string, public age: number){}

    getUser = () => {
        return {
            name: this.name,
            surname: this.surname,
            age: this.age
        }
    }
}