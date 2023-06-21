import {Attributes} from "./Attributes.tsx";
import {Skills} from "./Skills.tsx";
import {Talents} from "./Talents.tsx";

export class Career {
    name: string;
    keyAttribute: Attributes;
    skills: [Skills, Skills, Skills];
    talents: [Talents, Talents, Talents];
    equipment: string[];

    constructor(name: string, keyAttribute: Attributes, skills: [Skills, Skills, Skills], talents: [Talents, Talents, Talents], equipment: string[]) {
        this.name = name;
        this.keyAttribute = keyAttribute;
        this.skills = skills;
        this.talents = talents;
        this.equipment = equipment;
    }

    getName() {
        return this.name;
    }

    getKeyAttribute() {
        return this.keyAttribute;
    }

    getSkills() {
        return this.skills;
    }

    getTalents() {
        return this.talents;
    }

    getEquipment() {
        return this.equipment;
    }
}

export function getCareer(name: string): Career {
    return careers.find(career => career.getName() === name)!;
}

export const careers: Career[] = [
    new Career("Agent de la compagnie", Attributes.Wits, [Skills.Comtech, Skills.Manipulation, Skills.Observation], [Talents.PersonalSafety, Talents.TakeControl, Talents.Cunning], ["Equipement 1", "Equipement 2"]),
    new Career("Gamin", Attributes.Agility, [Skills.Mobility, Skills.Observation, Skills.Survival], [Talents.Dodge, Talents.BeneathNotice, Talents.Nimble], ["Equipement 1", "Equipement 2"])
];