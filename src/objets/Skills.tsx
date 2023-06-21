export class Skill {
    name: string;
    value: number;

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

export enum Skills {
    HeavyMachinery = "Machines lourdes",
    Endurance = "Endurance",
    CloseCombat = "Combat rapproché",
    Mobility = "Mobilité",
    RangedCombat = "Combat à distance",
    Piloting = "Pilotage",
    Observation = "Observation",
    Comtech = "Comtech",
    Survival = "Survie",
    Command = "Commandement",
    Manipulation = "Manipulation",
    MedicalAid = "Premiers soins",
}