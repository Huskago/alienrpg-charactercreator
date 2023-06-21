interface IEquipment {
    name: string;
    weight: number;
    isWeapon: boolean;
    bonus: number;
    damage: number;
    range: number;
    isArmor: boolean;
    protection: number;
}

class Equipment {
    name: string;
    weight: number;
    isWeapon: boolean;
    bonus: number;
    damage: number;
    range: number;
    isArmor: boolean;
    protection: number;

    constructor(equipment?: IEquipment) {
        this.name = equipment?.name || "";
        this.weight = equipment?.weight || 0;
        this.isWeapon = equipment?.isWeapon || false;
        this.bonus = equipment?.bonus || 0;
        this.damage = equipment?.damage || 0;
        this.range = equipment?.range || 0;
        this.isArmor = equipment?.isArmor || false;
        this.protection = equipment?.protection || 0;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    isAWeapon() {
        return this.isWeapon;
    }

    getBonus() {
        return this.bonus;
    }

    getDamage() {
        return this.damage;
    }

    getRange() {
        return this.range;
    }

    isAnArmor() {
        return this.isArmor;
    }

    getProtection() {
        return this.protection;
    }
}

export enum Equipments {

}