export class Attribute {
    public name: string;
    public value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }
}

export enum Attributes {
    Srength = "Force",
    Agility = "Agilité",
    Wits = "Esprit",
    Empathy = "Empathie"
}