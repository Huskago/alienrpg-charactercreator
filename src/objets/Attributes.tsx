export class Attribute {
    type: Attributes;
    value: number;

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
    empathy: Attribute;

    constructor(force: Attribute, agilite: Attribute, wits: Attribute, empathy: Attribute) {
        this.force = force;
        this.agilite = agilite;
        this.wits = wits;
        this.empathy = empathy;
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

    getEmpathy() {
        return this.empathy;
    }
}

export enum Attributes {
    Srength = "Force",
    Agility = "Agilité",
    Wits = "Esprit",
    Empathy = "Empathie"
}