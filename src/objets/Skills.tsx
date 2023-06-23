export class Skill {
    type: Skills;
    value: number;

    constructor(type: Skills, value: number) {
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
        this.value = 0;
    }
}

export class SkillsList {
    // Force
    heavyMachinery: Skill;
    endurance: Skill;
    closeCombat: Skill;
    // Agility
    mobility: Skill;
    rangedCombat: Skill;
    piloting: Skill;
    // Wits
    observation: Skill;
    comtech: Skill;
    survival: Skill;
    // Empathy
    command: Skill;
    manipulation: Skill;
    medicalAid: Skill;

    constructor(heavyMachinery: Skill, endurance: Skill, closeCombat: Skill, mobility: Skill, rangedCombat: Skill, piloting: Skill, observation: Skill, comtech: Skill, survival: Skill, command: Skill, manipulation: Skill, medicalAid: Skill) {
        this.heavyMachinery = heavyMachinery;
        this.endurance = endurance;
        this.closeCombat = closeCombat;
        this.mobility = mobility;
        this.rangedCombat = rangedCombat;
        this.piloting = piloting;
        this.observation = observation;
        this.comtech = comtech;
        this.survival = survival;
        this.command = command;
        this.manipulation = manipulation;
        this.medicalAid = medicalAid;
    }

    getSkills() {
        return [
            this.heavyMachinery,
            this.endurance,
            this.closeCombat,
            this.mobility,
            this.rangedCombat,
            this.piloting,
            this.observation,
            this.comtech,
            this.survival,
            this.command,
            this.manipulation,
            this.medicalAid,
        ];
    }

    getHeavyMachinery() {
        return this.heavyMachinery;
    }

    getEndurance() {
        return this.endurance;
    }

    getCloseCombat() {
        return this.closeCombat;
    }

    getMobility() {
        return this.mobility;
    }

    getRangedCombat() {
        return this.rangedCombat;
    }

    getPiloting() {
        return this.piloting;
    }

    getObservation() {
        return this.observation;
    }

    getComtech() {
        return this.comtech;
    }

    getSurvival() {
        return this.survival;
    }

    getCommand() {
        return this.command;
    }

    getManipulation() {
        return this.manipulation;
    }

    getMedicalAid() {
        return this.medicalAid;
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