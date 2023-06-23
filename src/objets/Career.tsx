import {Attributes} from "./Attributes.tsx";
import {Skills} from "./Skills.tsx";
import {Talents} from "./Talents.tsx";
import {Equipments} from "./Equipments.tsx";

export class Career {
    name: string;
    keyAttribute: Attributes;
    skills: [Skills, Skills, Skills];
    talents: [Talents, Talents, Talents];
    equipment: [Equipments, Equipments][]

    constructor(name: string, keyAttribute: Attributes, skills: [Skills, Skills, Skills], talents: [Talents, Talents, Talents], equipment: [Equipments, Equipments][]) {
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return careers.find(career => career.getName() === name)!;
}

export const careers: Career[] = [
    new Career("Agent de la compagnie", Attributes.Wits, [Skills.Comtech, Skills.Manipulation, Skills.Observation], [Talents.PersonalSafety, Talents.TakeControl, Talents.Cunning], [[Equipments.LeatherSuitcase, Equipments.ChromeSuitcase], [Equipments.PlatedPen, Equipments.ExceptionalWatch], [Equipments.DataTransmitterCard, Equipments.M4A3ServicePistol], [Equipments.D6NeversleepPills, Equipments.D6Naproleve]]),
    new Career("Gamin", Attributes.Agility, [Skills.Mobility, Skills.Observation, Skills.Survival], [Talents.Dodge, Talents.BeneathNotice, Talents.Nimble], [[Equipments.FishingRod, Equipments.LaserPointer], [Equipments.Magnet, Equipments.RemoteControlledCar], [Equipments.Yoyo, Equipments.PocketVideoGameConsole], [Equipments.PersonalLocatorBeacon, Equipments.ColoredFeltPens]])
];