export class Attribute {
    public type: Attributes;
    public value: number;

    constructor(type: Attributes, value: number) {
        this.type = type;
        this.value = value;
    }

    getType() {
        return this.type;
    }

    getValue() {
        return this.value;
    }

    incrementValue() {
        this.value++;
    }

    decrementValue() {
        this.value--;
    }

    resetValue() {
        this.value = 2;
    }
}

export class AttributesList {
    force: Attribute;
    agilite: Attribute;
    wits: Attribute;
    empathie: Attribute;

    constructor(force: Attribute, agilite: Attribute, wits: Attribute, empathie: Attribute) {
        this.force = force;
        this.agilite = agilite;
        this.wits = wits;
        this.empathie = empathie;
    }

    getForce() {
        return this.force;
    }

    getAgilite() {
        return this.agilite;
    }

    getWits() {
        return this.wits;
    }

    getEmpathie() {
        return this.empathie;
    }
}

export enum Attributes {
    Srength = "Force",
    Agility = "Agilité",
    Wits = "Esprit",
    Empathy = "Empathie"
}